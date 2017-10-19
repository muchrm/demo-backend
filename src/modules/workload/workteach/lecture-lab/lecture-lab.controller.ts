import { Controller, Get} from '@nestjs/common';

@Controller('workload/workteach/bachelor/lecture-lab')
export class LectureLabController {
    @Get()
    findAll() {
      return [];
    }
}
