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
    @Inject(Cons.InternModelToken) private readonly InternModel: Model<ISeminar>,
    private readonly seminarCalculate: SeminarCalculate,
  ) { }
  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.InternModel.find().populate({ path: 'teachers._id' }));
  }
  create(createSeminarDto: CreateSeminarDto): Observable<ISeminar> {
    const calculatedSeminarDto = this.seminarCalculate.calculate(createSeminarDto);
    const createdSeminar = new this.InternModel(calculatedSeminarDto);
    return Observable.fromPromise(createdSeminar.save());
  }
}
