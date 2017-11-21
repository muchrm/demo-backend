
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
import { ThesisController } from './controllers/thesis.controller';
import { ThesisCalculate } from './calculates/thesis.calculate';
import { ThesisService } from './services/thesis.service';
import { ThesisTransformer } from './transformers/thesis.transformer';
import { ThesisProviders } from './providers/thesis.providers';
@Module({
  controllers: [
    InternController,
    LectureLabController,
    ProjectAndSpecialProblemController,
    SeminarController,
    ThesisController,
  ],
  components: [
    InternCalculate,
    ProjectAndSpecialProblemCalculate,
    SeminarCalculate,
    ThesisCalculate,
    InternService,
    LectureLabService,
    ProjectAndSpecialProblemService,
    SeminarService,
    ThesisService,
    InternTransformer,
    LectureLabTransformer,
    ProjectAndSpecialProblemTransformer,
    SeminarTransformer,
    ThesisTransformer,
    ...InternProviders,
    ...LectureLabProviders,
    ...ProjectAndSpecialProblemProviders,
    ...SeminarProviders,
    ...ThesisProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class WorkteachModule { }
