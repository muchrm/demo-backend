import { Observable } from 'rxjs/Rx';
import { Controller, Get} from '@nestjs/common';
import { LectureLabsService } from './lecture-lab.service';
import { CreateLectureLabDto } from './dtos/create-lecture-lab.dto';
@Controller('workload/workteach/bachelor/lecture-lab')
export class LectureLabController {
  constructor(
    private readonly lectureLabsService: LectureLabsService) { }

    @Get()
    findAll():Observable<CreateLectureLabDto[]> {
      return this.lectureLabsService.findAll();
    }
    @Get('test')
    findAll2():Observable<CreateLectureLabDto> {
      return this.lectureLabsService.create({courseCodes:[1234]});
    }
}
