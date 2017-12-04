import { Module } from '@nestjs/common';
import { GrantModule } from './grant/grant.module';
import { PresentationModule } from './presentation/presentation.module';
@Module({
  modules: [
    GrantModule,
    PresentationModule,
  ],
})
export class ResearchModule { }
