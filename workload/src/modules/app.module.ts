import { Module } from '@nestjs/common';
import { WorkteachModule } from './workteach/workteach.module';
@Module({
  modules: [
    WorkteachModule,
  ],
})
export class ApplicationModule { }
