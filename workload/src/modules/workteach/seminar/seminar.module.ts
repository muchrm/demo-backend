import { Module } from '@nestjs/common';
import { CommonModule } from '../../common/common.module';
import { SeminarCalculate } from './seminar.calculate';
import { SeminarProviders } from './seminar.providers';
import { SeminarService } from './seminar.service';
import { StaffSeminarController } from './staff-seminar.controller';
import { StaffSeminarTransformer } from './staff-seminar.transformer';
import { TeacherSeminarController } from './teacher-seminar.controller';
import { TeacherSeminarTransformer } from './teacher-seminar.transformer';
@Module({
  controllers: [
    StaffSeminarController,
    TeacherSeminarController,
  ],
  components: [
    SeminarCalculate,
    SeminarService,
    StaffSeminarTransformer,
    TeacherSeminarTransformer,
    ...SeminarProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class SeminarModule { }
