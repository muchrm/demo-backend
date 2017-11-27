import { Module } from '@nestjs/common';
import { ResearchGrantModule } from './research-grant/research-grant.module';
@Module({
  modules: [
    ResearchGrantModule,
  ],
})
export class ApplicationModule { }
