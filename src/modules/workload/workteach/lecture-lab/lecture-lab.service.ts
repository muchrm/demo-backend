import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { LectureLab as Cons } from './constants';
import { CreateLectureLabDto } from './dtos/create-lecture-lab.dto';
import { ILectureLab } from './interfaces/lecture-lab.interface';
import { LectureLabTransformer } from './lecture-lab.transformer';

@Component()
export class LectureLabService {
  constructor(
    @Inject(Cons.LectureLabModelToken) private readonly lectureLabModel: Model<ILectureLab>,
    private tranformer: LectureLabTransformer,
  ) { }
  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.lectureLabModel.find())
      .map((results) => this.tranformer.collection(results));
  }
  create(createLectureLabDto: CreateLectureLabDto): Observable<ILectureLab> {
    const createdLectureLab = new this.lectureLabModel(createLectureLabDto);
    return Observable.fromPromise(createdLectureLab.save())
      .map((results) => this.tranformer.collection(results));
  }
}
