import { Module } from '@nestjs/common';
import { LectureLabController } from './lecture-lab.controller';
import { LectureLabsProviders } from './lecture-lab.providers';
import { LectureLabsService } from './lecture-lab.service';
import { DatabaseModule } from '../../common/database/database.module';
@Module({
    controllers: [
        LectureLabController,
    ],
    components: [
        LectureLabsService,
        ...LectureLabsProviders,
    ],
    modules: [
        DatabaseModule,
    ],
})
export class LectureLabModule { }