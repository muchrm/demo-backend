import { Controller, Get} from '@nestjs/common';

@Controller('workload/workteach/bachelor/seminar')

export class WorkteachBachelorSeminarController {
    @Get()
    findAll() {
      return [];
    }
}
