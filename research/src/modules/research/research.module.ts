import { Module } from '@nestjs/common';
import { GrantModule } from './grant/grant.module';
@Module({
  modules: [
    GrantModule,
  ],
})
export class ResearchModule { }
