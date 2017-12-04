import { Module } from '@nestjs/common';
import { PresentModule } from './present/present.module';
@Module({
  modules: [
    PresentModule,
  ],
})
export class PresentationModule { }
