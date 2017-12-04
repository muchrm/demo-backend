
import { Module } from '@nestjs/common';
import { CommonModule } from '../../../common/common.module';
import { ContractCalculate } from './contract.calculate';
import { ContractController } from './contract.controller';
import { ContractProviders } from './contract.providers';
import { ContractService } from './contract.service';
import { ContractTransformer } from './contract.transformer';
@Module({
  controllers: [
    ContractController,
  ],
  components: [
    ContractCalculate,
    ContractService,
    ContractTransformer,
    ...ContractProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class ContractModule { }
