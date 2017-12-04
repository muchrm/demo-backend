
import { Module } from '@nestjs/common';
import { CommonModule } from '../../common/common.module';
import { LectureLabController } from './lecture-lab.controller';
import { LectureLabProviders } from './lecture-lab.providers';
import { LectureLabService } from './lecture-lab.service';
import { LectureLabTransformer } from './lecture-lab.transformer';
@Module({
  controllers: [
    LectureLabController,
  ],
  components: [
    LectureLabService,
    LectureLabTransformer,
    ...LectureLabProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class LectureLabModule { }
