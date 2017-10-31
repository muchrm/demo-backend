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
    const token = jwt.sign(user, secretOrKey, { expiresIn });
    let url = {};
    await this.kong.get('/apis').then((data) => {
      url = data;
    });
    return {
      url,
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    // put some validation logic here
    // for example query user by id / email / username
    return true;
  }
}
