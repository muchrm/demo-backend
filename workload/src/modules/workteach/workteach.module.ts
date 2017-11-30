
import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';

import { InternCalculate } from './calculates/intern.calculate';
import { ProjectAndSpecialProblemCalculate } from './calculates/project-and-special-problem.calculate';
import { SeminarCalculate } from './calculates/seminar.calculate';
import { ThesisCalculate } from './calculates/thesis.calculate';

import { LectureLabController } from './controllers/lecture-lab.controller';
import { StaffInternController } from './controllers/staff-intern.controller';
import { StaffProjectAndSpecialProblemController } from './controllers/staff-project-and-special-problem.controller';
import { StaffSeminarController } from './controllers/staff-seminar.controller';
import { StaffThesisController } from './controllers/staff-thesis.controller';

import { TeacherInternController } from './controllers/teacher-intern.controller';
import { TeacherProjectAndSpecialProblemController } from './controllers/teacher-project-and-special-problem.controller';
import { TeacherSeminarController } from './controllers/teacher-seminar.controller';
import { TeacherTeacherThesisController } from './controllers/teacher-thesis.controller';

import { InternProviders } from './providers/intern.providers';
import { LectureLabProviders } from './providers/lecture-lab.providers';
import { ProjectAndSpecialProblemProviders } from './providers/project-and-special-problem.providers';
import { SeminarProviders } from './providers/seminar.providers';
import { ThesisProviders } from './providers/thesis.providers';

import { InternService } from './services/intern.service';
import { LectureLabService } from './services/lecture-lab.service';
import { ProjectAndSpecialProblemService } from './services/project-and-special-problem.service';
import { SeminarService } from './services/seminar.service';
import { ThesisService } from './services/thesis.service';

import { InternTransformer } from './transformers/intern.transformer';
import { LectureLabTransformer } from './transformers/lecture-lab.transformer';
import { ProjectAndSpecialProblemTransformer } from './transformers/project-and-special-problem.transformer';
import { SeminarTransformer } from './transformers/seminar.transformer';
import { ThesisTransformer } from './transformers/thesis.transformer';

import { TeacherInternTransformer } from './transformers/teacher-intern.transformer';
import { TeacherProjectAndSpecialProblemTransformer } from './transformers/teacher-project-and-special-problem.transformer';
import { TeacherSeminarTransformer } from './transformers/teacher-seminar.transformer';
import { TeacherThesisTransformer } from './transformers/teacher-thesis.transformer';

@Module({
  controllers: [
    StaffInternController,
    LectureLabController,
    StaffProjectAndSpecialProblemController,
    StaffSeminarController,
    StaffThesisController,
    TeacherInternController,
    TeacherProjectAndSpecialProblemController,
    TeacherSeminarController,
    TeacherTeacherThesisController,
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

    TeacherInternTransformer,
    TeacherProjectAndSpecialProblemTransformer,
    TeacherSeminarTransformer,
    TeacherThesisTransformer,

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
