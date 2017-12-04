
import { Module } from '@nestjs/common';
import { CommonModule } from '../../../common/common.module';
import { ResultCalculate } from './result.calculate';
import { ResultController } from './result.controller';
import { ResultProviders } from './result.providers';
import { ResultService } from './result.service';
import { ResultTransformer } from './result.transformer';
@Module({
  controllers: [
    ResultController,
  ],
  components: [
    ResultCalculate,
    ResultService,
    ResultTransformer,
    ...ResultProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class ResultModule { }
