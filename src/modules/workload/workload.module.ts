import { Module } from '@nestjs/common';
import { WorkteachBachelorSeminarController } from './workteach-bachelor-seminar.controller';
import { WorkteachBachelorCapstoneController } from './workteach-bachelor-capstone.controller';
import { WorkteachBachelorInternController } from './workteach-bachelor-intern.controller';
import { WorkteachBachelorTeachController } from './workteach-bachelor-teach.controller';

@Module({
    controllers: [
        WorkteachBachelorTeachController,
        WorkteachBachelorInternController,
        WorkteachBachelorCapstoneController,
        WorkteachBachelorSeminarController,
    ],
})
export class WorkloadModule {}