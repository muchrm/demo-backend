
import { Module } from '@nestjs/common';
import { TeachersModule } from '../../../manage/teachers/teachers.module';
import { DatabaseModule } from '../../common/database/database.module';
import { LectureLabController } from './lecture-lab.controller';
import { LectureLabsProviders } from './lecture-lab.providers';
import { LectureLabService } from './lecture-lab.service';
import { LectureLabTransformer } from './transformer/lecture-lab.transformer';

@Module({
    controllers: [
        LectureLabController,
    ],
    components: [
        LectureLabService,
        LectureLabTransformer,
        ...LectureLabsProviders,
    ],
    modules: [
        DatabaseModule,
        // TeachersModule,
    ],
})
export class LectureLabModule { }
