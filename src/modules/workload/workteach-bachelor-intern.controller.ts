import { Controller, Get} from '@nestjs/common';

@Controller('workload/workteach/bachelor/intern')

export class WorkteachBachelorInternController {
    @Get()
    findAll() {
      return [];
    }
}
