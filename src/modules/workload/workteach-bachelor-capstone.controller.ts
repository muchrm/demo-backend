import { Controller, Get} from '@nestjs/common';

@Controller('workload/workteach/bachelor/capstone')

export class WorkteachBachelorCapstoneController {
    @Get()
    findAll() {
      return [];
    }
}
