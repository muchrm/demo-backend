import { Module } from '@nestjs/common';
import { WorkteachBachelorSeminarController } from './controllers/workteach-bachelor-seminar.controller';
import { WorkteachBachelorCapstoneController } from './controllers/workteach-bachelor-capstone.controller';
import { WorkteachBachelorInternController } from './controllers/workteach-bachelor-intern.controller';
import { WorkteachBachelorTeachController } from './controllers/workteach-bachelor-teach.controller';
import { WorkteachBachelorTeachService } from './services/workteach-bachelor-teach.service';
import { WorkteachBachelorTeachsProviders } from './providers/workteach-bachelor-teachs.providers';

@Module({
    controllers: [
        WorkteachBachelorTeachController,
        WorkteachBachelorInternController,
        WorkteachBachelorCapstoneController,
        WorkteachBachelorSeminarController,
    ],
    components: [
        WorkteachBachelorTeachService,
        WorkteachBachelorTeachsProviders,
      ],
})
export class WorkloadModule {}