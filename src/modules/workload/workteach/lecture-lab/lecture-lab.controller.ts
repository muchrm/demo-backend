import { Controller, Get} from '@nestjs/common';

@Controller('workload/workteach/bachelor/teach')
export class LectureLabController {
    @Get()
    findAll() {
      return [];
    }
}
