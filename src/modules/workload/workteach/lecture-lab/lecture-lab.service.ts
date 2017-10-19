import { Observable } from 'rxjs/Rx';
import { Component, Inject } from '@nestjs/common';
import { CreateLectureLabDto } from './dtos/create-lecture-lab.dto';
import { ILectureLab } from './interfaces/lecture-lab.interface';
import { Model } from 'mongoose';

@Component()
export class LectureLabsService {
    constructor(
        @Inject('LectureLabModelToken') private readonly lectureLabModel: Model<ILectureLab>) { }
    findAll(): Observable<ILectureLab[]> {
        return Observable.of([]);
    }
    create(createLectureLabDto: CreateLectureLabDto): Observable<ILectureLab> {
        const createdLectureLab = new this.lectureLabModel(createLectureLabDto);
        return Observable.fromPromise(createdLectureLab.save());
    }
}