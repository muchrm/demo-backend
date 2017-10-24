
import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/database/database.module';
@Module({
  modules: [
    DatabaseModule,
  ],
})
export class ManageModule { }
