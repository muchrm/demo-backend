
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { rabbitMQProviders } from '../../common/rabbitmq/rabbitmq.provider';
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
        ...rabbitMQProviders,
    ],
    modules: [
        DatabaseModule,
    ],
})
export class LectureLabModule { }
