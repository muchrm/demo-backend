import { Module } from '@nestjs/common';
import { LectureLabController } from './controllers/lecture-lab.controller';
import { InternController } from './controllers/intern.controller';
import { InternProviders } from './providers/intern.providers';
import { InternService } from './services/intern.service';
import { InternTransformer } from './transformers/intern.transformer';
import { LectureLabProviders } from './providers/lecture-lab.providers';
import { LectureLabService } from './services/lecture-lab.service';
import { LectureLabTransformer } from './transformers/lecture-lab.transformer';
import { CommonModule } from '../common/common.module';
import { ProjectAndSpecialProblemController } from './controllers/project-and-special-problem.controller';
import { ProjectAndSpecialProblemProviders } from './providers/project-and-special-problem.providers';
import { ProjectAndSpecialProblemService } from './services/project-and-special-problem.service';
import { ProjectAndSpecialProblemTransformer } from './transformers/project-and-special-problem.transformer';

@Module({
  controllers: [
    InternController,
    LectureLabController,
    ProjectAndSpecialProblemController

  ],
  components: [
    InternService,
    InternTransformer,
    ...InternProviders,
    LectureLabService,
    LectureLabTransformer,
    ...LectureLabProviders,
    ProjectAndSpecialProblemService,
    ProjectAndSpecialProblemTransformer,
    ...ProjectAndSpecialProblemProviders,
  ],
  modules: [
    CommonModule
  ],
})
export class WorkteachModule { }
