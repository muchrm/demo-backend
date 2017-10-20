import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { LectureLabController } from './lecture-lab.controller';
import { LectureLabsProviders } from './lecture-lab.providers';
import { LectureLabService } from './lecture-lab.service';
import { LectureLabTransformer } from './lecture-lab.transformer';

@Module({
    controllers: [
        LectureLabController,
    ],
    components: [
        LectureLabService,
        ...LectureLabsProviders,
        LectureLabTransformer,
    ],
    modules: [
        DatabaseModule,
    ],
})
export class LectureLabModule { }
