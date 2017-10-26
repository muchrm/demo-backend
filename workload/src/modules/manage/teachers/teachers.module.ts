import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { TeachersProviders } from './teachers.providers';

@Module({
  modules: [
    DatabaseModule,
  ],
  components: [
    ...TeachersProviders,
  ],
})
export class TeachersModule { }
