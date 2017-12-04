
import { Module } from '@nestjs/common';
import { CommonModule } from '../../../common/common.module';
import { SendingCalculate } from './sending.calculate';
import { SendingController } from './sending.controller';
import { SendingProviders } from './sending.providers';
import { SendingService } from './sending.service';
import { SendingTransformer } from './sending.transformer';
@Module({
  controllers: [
    SendingController,
  ],
  components: [
    SendingCalculate,
    SendingService,
    SendingTransformer,
    ...SendingProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class SendingModule { }
