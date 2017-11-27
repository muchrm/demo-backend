import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { SeminarCalculate } from '../calculates/seminar.calculate';
import { Constants as Cons } from '../constants';
import { CreateSeminarDto } from '../dtos/create-seminar.dto';
import { ISeminar } from '../interfaces/seminar.interface';

@Component()
export class SeminarService {
  constructor(
    @Inject(Cons.SeminarModelToken) private readonly seminarModel: Model<ISeminar>,
    private readonly seminarCalculate: SeminarCalculate,
  ) { }
  findAll(option): Observable<any[]> {
    return Observable.fromPromise(this.seminarModel.find().populate({ path: 'teachers._id' }));
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
