import { Module } from '@nestjs/common';
import { TeachersModule } from './teachers/teachers.module';
@Module({
  modules: [
    TeachersModule,
  ],
})
export class ManageModule { }
