import { Module } from '@nestjs/common';
import { LectureLabModule } from './lecture-lab/lecture-lab.module';
@Module({
    modules: [
        LectureLabModule,
    ],
})
export class WorkteachModule { }
