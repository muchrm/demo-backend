import { Module } from '@nestjs/common';
import { AcademicModule } from './academic/academic.module';
@Module({
  modules: [
    AcademicModule,
  ],
})
export class ResultModule { }
