import { Module } from '@nestjs/common';
import { ContractModule } from './contract/contract.module';
import { SendingModule } from './sending/sending.module';
@Module({
  modules: [
    ContractModule,
    SendingModule,
  ],
})
export class GrantModule { }
