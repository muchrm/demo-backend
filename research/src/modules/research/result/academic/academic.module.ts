
import { Module } from '@nestjs/common';
import { CommonModule } from '../../../common/common.module';
import { AcademicCalculate } from './academic.calculate';
import { AcademicController } from './academic.controller';
import { AcademicProviders } from './academic.providers';
import { AcademicService } from './academic.service';
import { AcademicTransformer } from './academic.transformer';
@Module({
  controllers: [
    AcademicController,
  ],
  components: [
    AcademicCalculate,
    AcademicService,
    AcademicTransformer,
    ...AcademicProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class AcademicModule { }
