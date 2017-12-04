
import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { InternModule } from './intern/intern.module';
import { LectureLabModule } from './lecturelab/recture-lab.module';
import { ProjectAndSpecialProblemModule } from './project-and-special-problem/project-and-special-problem.module';
import { SeminarModule } from './seminar/seminar.module';
import { ThesisModule } from './thesis/thesis.module';

@Module({
  modules: [
    CommonModule,
    InternModule,
    LectureLabModule,
    ProjectAndSpecialProblemModule,
    SeminarModule,
    ThesisModule,
  ],
})
export class WorkteachModule { }
