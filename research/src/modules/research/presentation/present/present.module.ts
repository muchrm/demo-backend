
import { Module } from '@nestjs/common';
import { CommonModule } from '../../../common/common.module';
import { PresentCalculate } from './present.calculate';
import { PresentController } from './present.controller';
import { PresentProviders } from './present.providers';
import { PresentService } from './present.service';
import { PresentTransformer } from './present.transformer';
@Module({
  controllers: [
    PresentController,
  ],
  components: [
    PresentCalculate,
    PresentService,
    PresentTransformer,
    ...PresentProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class PresentModule { }
