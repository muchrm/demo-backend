import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { WorkteachModule } from './workteach/workteach.module';

@Module({
  controllers: [
    StatusController,
  ],
  modules: [
    WorkteachModule,
  ],
})
export class ApplicationModule { }
