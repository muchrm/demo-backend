import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
export class Credential {
  username: string;
  password: string;
}

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('token')
  public async getToken() {
    return await this.authService.createToken();
  }
  @Post('login')
  public async login( @Body() credential: Credential) {
    return await this.authService.login(credential);
  }
}
