import { LectureLab59Dto } from './dtos/lecture-lab-59.dto';
import { Observable } from 'rxjs/Rx';
import { Component, Inject } from '@nestjs/common';
import { CreateLectureLabDto } from './dtos/create-lecture-lab.dto';
import { ILectureLab } from './interfaces/lecture-lab.interface';
import { Model } from 'mongoose';
import { LectureLab as Cons } from './constants';
@Component()
export class LectureLabsService {
    constructor(
        @Inject(Cons.LectureLabModelToken) private readonly lectureLabModel: Model<ILectureLab>
    ) { }
    findAll(): Observable<ILectureLab[]> {
        return Observable.fromPromise(this.lectureLabModel.find())
    }
    create(createLectureLabDto: CreateLectureLabDto): Observable<ILectureLab> {
        const createdLectureLab = new this.lectureLabModel(createLectureLabDto);
        return Observable.fromPromise(createdLectureLab.save());
    }
}