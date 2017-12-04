import { Module } from '@nestjs/common';
import { ContractModule } from './contract/contract.module';
@Module({
  modules: [
    ContractModule,
  ],
})
export class GrantModule { }
