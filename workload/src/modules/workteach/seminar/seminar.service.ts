import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { Constants as Cons } from './constants';
import { CreateSeminarDto } from './create-seminar.dto';
import { SeminarCalculate } from './seminar.calculate';
import { ISeminar } from './seminar.interface';

@Component()
export class SeminarService {
  constructor(
    @Inject(Cons.SeminarModelToken) private readonly seminarModel: Model<ISeminar>,
    private readonly seminarCalculate: SeminarCalculate,
  ) { }
  findAll(option): Observable<any[]> {
    return Observable.fromPromise(this.seminarModel.find(option));
  }

  findByTeacher(id, option): Observable<any[]> {
    option.teachers = { $elemMatch: { id } };
    return Observable.fromPromise(this.seminarModel.find(option));
  }

  create(createSeminarDto: CreateSeminarDto): Observable<ISeminar> {
    const calculatedSeminarDto = this.seminarCalculate.calculate(createSeminarDto);
    const createdSeminar = new this.seminarModel(calculatedSeminarDto);
    return Observable.fromPromise(createdSeminar.save());
  }

  update(id: string, createSeminarDto: CreateSeminarDto): Observable<ISeminar> {
    const calculatedSeminarDto = this.seminarCalculate.calculate(createSeminarDto);
    return Observable.fromPromise(this.seminarModel.findOneAndUpdate({ _id: id }, calculatedSeminarDto));
  }

  delete(id: string) {
    return Observable.fromPromise(this.seminarModel.find({ _id: id }).remove());
  }
}
