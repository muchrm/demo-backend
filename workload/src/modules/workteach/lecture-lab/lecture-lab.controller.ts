import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs/Rx';
import { CreateLectureLabDto } from './dtos/create-lecture-lab.dto';
import { LectureLabService } from './lecture-lab.service';
import { LectureLabTransformer } from './transformer/lecture-lab.transformer';
@Controller('workteach/lecture-lab')
export class LectureLabController {
  constructor(
    private readonly lectureLabService: LectureLabService,
    private tranformer: LectureLabTransformer,
  ) { }

  @Get()
  findAll(): Observable<CreateLectureLabDto[]> {
    return this.lectureLabService.findAll()
      .map((results) => this.tranformer.collection(results));
  }
  @Get('test')
  findAll2(): Observable<CreateLectureLabDto> {
    return this.lectureLabService.create({ courseCodes: [1234] })
      .map((results) => this.tranformer.collection(results));
  }
}
