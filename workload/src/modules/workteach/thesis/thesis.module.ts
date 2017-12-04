import { Module } from '@nestjs/common';
import { CommonModule } from '../../common/common.module';
import { StaffThesisTransformer } from './staff-thesis.transformer';
import { TeacherThesisTransformer } from './teacher-thesis.transformer';
import { ThesisCalculate } from './thesis.calculate';
import { ThesisProviders } from './thesis.providers';
import { ThesisService } from './thesis.service';

@Module({
  controllers: [
  ],
  components: [
    ThesisCalculate,
    ThesisService,
    StaffThesisTransformer,
    TeacherThesisTransformer,
    ...ThesisProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class ThesisModule { }
