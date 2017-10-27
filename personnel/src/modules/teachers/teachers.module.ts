import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { TeacherController } from './teachers.controller';
import { TeachersProviders } from './teachers.providers';

@Module({
  modules: [
    DatabaseModule,
  ],
  controllers: [
    TeacherController,
  ],
  components: [
    ...TeachersProviders,
  ],
})
export class TeachersModule { }
