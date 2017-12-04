import { Module } from '@nestjs/common';
import { GrantModule } from './grant/grant.module';
import { PresentationModule } from './presentation/presentation.module';
import { ResultModule } from './result/result.module';
@Module({
  modules: [
    GrantModule,
    PresentationModule,
    ResultModule,
  ],
})
export class ResearchModule { }
