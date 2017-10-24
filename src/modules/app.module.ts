import { Module } from '@nestjs/common';
import { ManageModule } from './manage/manage.module';
import { WorkloadModule } from './workload/workload.module';
@Module({
  modules: [
    WorkloadModule,
    ManageModule,
  ],
})
export class ApplicationModule { }
