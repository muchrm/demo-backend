import { Controller, Get} from '@nestjs/common';

@Controller('workload/workteach/bachelor/teach')

export class WorkteachBachelorTeachController {
    @Get()
    findAll() {
      return [];
    }
}
