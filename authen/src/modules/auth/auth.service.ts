import { Component, Inject } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Kong } from '../common/kong';

@Component()
export class AuthService {
  kong = new Kong('http://kong:8001');
  async createToken() {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const user = { email: 'thisis@example.com' };
    const issuer = 'http://mis.sci.buu.ac.th';
    const token = jwt.sign(user, secretOrKey, { issuer, expiresIn });
    await this.generateConsumer(user.email, issuer, secretOrKey);
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async login(credential: any): Promise<any> {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const user = { email: 'thisis@example.com', username: credential.username };
    const issuer = 'http://mis.sci.buu.ac.th';

    const token = jwt.sign(user, secretOrKey, { issuer, expiresIn });
    await this.generateConsumer(user.email, issuer, secretOrKey);

    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }
  async generateConsumer(username: string, key: string, secret: string) {
    const result = await this.kong.get('/consumers/' + username);
    if (result.message === 'Not found') {
      await this.kong.post('/consumers/' + username, { username });
    }
    const jwts = await this.kong.get('/consumers/' + username + '/jwt');
    await jwts.data.forEach(async (token) => {
      await this.kong.delete('/consumers/' + username + '/jwt/' + token.id);
    });
    return await this.kong.post('/consumers/' + username + '/jwt', { key, secret });
  }
}
