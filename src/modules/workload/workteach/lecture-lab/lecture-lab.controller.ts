import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs/Rx';
import { CreateLectureLabDto } from './dtos/create-lecture-lab.dto';
import { LectureLabService } from './lecture-lab.service';

@Controller('workload/workteach/lecture-lab')
export class LectureLabController {
  constructor(
    private readonly lectureLabService: LectureLabService) { }

  @Get()
  findAll(): Observable<CreateLectureLabDto[]> {
    return this.lectureLabService.findAll();
  }
  @Get('test')
  findAll2(): Observable<CreateLectureLabDto> {
    return this.lectureLabService.create({ courseCodes: [1234] });
  }
}
