import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { LectureLab as Cons } from './constants';
import { CreateLectureLabDto } from './dtos/create-lecture-lab.dto';
import { ILectureLab } from './interfaces/lecture-lab.interface';

@Component()
export class LectureLabService {
  constructor(
    @Inject(Cons.LectureLabModelToken) private readonly lectureLabModel: Model<ILectureLab>,
  ) { }
  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.lectureLabModel.find().populate({ path: 'teachers._id' }));

  }
  create(createLectureLabDto: CreateLectureLabDto): Observable<ILectureLab> {
    const createdLectureLab = new this.lectureLabModel(createLectureLabDto);
    return Observable.fromPromise(createdLectureLab.save());
  }
}
