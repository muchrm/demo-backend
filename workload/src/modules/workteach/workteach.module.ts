
import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { InternCalculate } from './calculates/intern.calculate';
import { ProjectAndSpecialProblemCalculate } from './calculates/project-and-special-problem.calculate';
import { SeminarCalculate } from './calculates/seminar.calculate';
import { InternController } from './controllers/intern.controller';
import { LectureLabController } from './controllers/lecture-lab.controller';
import { ProjectAndSpecialProblemController } from './controllers/project-and-special-problem.controller';
import { SeminarController } from './controllers/seminar.controller';
import { InternProviders } from './providers/intern.providers';
import { LectureLabProviders } from './providers/lecture-lab.providers';
import { ProjectAndSpecialProblemProviders } from './providers/project-and-special-problem.providers';
import { SeminarProviders } from './providers/seminar.providers';
import { InternService } from './services/intern.service';
import { LectureLabService } from './services/lecture-lab.service';
import { ProjectAndSpecialProblemService } from './services/project-and-special-problem.service';
import { SeminarService } from './services/seminar.service';
import { InternTransformer } from './transformers/intern.transformer';
import { LectureLabTransformer } from './transformers/lecture-lab.transformer';
import { ProjectAndSpecialProblemTransformer } from './transformers/project-and-special-problem.transformer';
import { SeminarTransformer } from './transformers/seminar.transformer';
@Module({
  controllers: [
    InternController,
    LectureLabController,
    ProjectAndSpecialProblemController,
    SeminarController,
  ],
  components: [
    InternCalculate,
    ProjectAndSpecialProblemCalculate,
    SeminarCalculate,
    InternService,
    LectureLabService,
    ProjectAndSpecialProblemService,
    SeminarService,
    InternTransformer,
    LectureLabTransformer,
    ProjectAndSpecialProblemTransformer,
    SeminarTransformer,
    ...InternProviders,
    ...LectureLabProviders,
    ...ProjectAndSpecialProblemProviders,
    ...SeminarProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class WorkteachModule { }
