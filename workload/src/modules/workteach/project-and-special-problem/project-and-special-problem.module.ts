import { Module } from '@nestjs/common';
import { CommonModule } from '../../common/common.module';

import { ProjectAndSpecialProblemCalculate } from './project-and-special-problem.calculate';
import { ProjectAndSpecialProblemProviders } from './project-and-special-problem.providers';
import { ProjectAndSpecialProblemService } from './project-and-special-problem.service';
import { StaffProjectAndSpecialProblemController } from './staff-project-and-special-problem.controller';
import { StaffProjectAndSpecialProblemTransformer } from './staff-project-and-special-problem.transformer';
import { TeacherProjectAndSpecialProblemController } from './teacher-project-and-special-problem.controller';
import { TeacherProjectAndSpecialProblemTransformer } from './teacher-project-and-special-problem.transformer';

@Module({
  controllers: [
    StaffProjectAndSpecialProblemController,
    TeacherProjectAndSpecialProblemController,
  ],
  components: [
    ProjectAndSpecialProblemCalculate,
    ProjectAndSpecialProblemService,
    StaffProjectAndSpecialProblemTransformer,
    TeacherProjectAndSpecialProblemTransformer,
    ...ProjectAndSpecialProblemProviders,
  ],
  modules: [
    CommonModule,
  ],
})
export class ProjectAndSpecialProblemModule { }
