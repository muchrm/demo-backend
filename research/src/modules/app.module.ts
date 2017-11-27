import { Module } from '@nestjs/common';
import { ResearchModule } from './research/research.module';
@Module({
  modules: [
    ResearchModule,
  ],
})
export class ApplicationModule { }
