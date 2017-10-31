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
    const issuer = "http://mis.sci.buu.ac.th";
    const token = jwt.sign(user, secretOrKey, {issuer, expiresIn });
    await this.generateConsumer(user.email,issuer,secretOrKey)
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    // put some validation logic here
    // for example query user by id / email / username
    return true;
  }
  async generateConsumer(username:string,key:string,secret:string){
    const result = await this.kong.get('/consumers/'+username)
    if(result.message == 'Not found'){
      await this.kong.post('/consumers/'+username,{username})
    }
    const jwts =  await this.kong.get('/consumers/'+username+'/jwt')
    await jwts.data.forEach( async (jwt) => {
      await this.kong.delete('/consumers/'+username+'/jwt/'+jwt.id);
    });
    return await this.kong.post('/consumers/'+username+'/jwt',{key,secret})
  }
}
