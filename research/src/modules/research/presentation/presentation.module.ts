import { Module } from '@nestjs/common';
import { PresentModule } from './present/present.module';
import { ResultModule } from './result/result.module';
@Module({
  modules: [
    PresentModule,
    ResultModule,
  ],
})
export class PresentationModule { }
