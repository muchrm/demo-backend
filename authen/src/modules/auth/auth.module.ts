import {
  MiddlewaresConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import * as passport from 'passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  components: [
    AuthService,
  ],
  controllers: [AuthController],
})
export class AuthModule  {
}
