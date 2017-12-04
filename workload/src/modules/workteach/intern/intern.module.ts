
import { Module } from '@nestjs/common';
import { CommonModule } from '../../common/common.module';
import { InternCalculate } from './intern.calculate';
import { InternProviders } from './intern.providers';
import { InternService } from './intern.service';
import { StaffInternController } from './staff-intern.controller';
import { StaffInternTransformer } from './staff-intern.transformer';
import { TeacherInternController } from './teacher-intern.controller';
import { TeacherInternTransformer } from './teacher-intern.transformer';
@Module({
  controllers: [
    StaffInternController,
    TeacherInternController,
  ],
  components: [
    InternCalculate,
    InternService,
    StaffInternTransformer,
    TeacherInternTransformer,
    ...InternProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class InternModule { }
