import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Credential } from './Credential.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('token')
  public async getToken() {
    return await this.authService.createToken();
  }
  @Post('login')
  public async login( @Body() credential: Credential) {
    return await this.authService.login(credential);
  }
}
