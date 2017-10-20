import { Module } from '@nestjs/common';
import { WorkloadModule } from './workload/workload.module';
@Module({
  modules: [
    WorkloadModule,
  ],
})
export class ApplicationModule { }
