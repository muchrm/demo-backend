import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { ThesisCalculate } from '../calculates/thesis.calculate';
import { Constants as Cons } from '../constants';
import { CreateThesisDto } from '../dtos/create-thesis.dto';
import { IThesis } from '../interfaces/thesis.interface';

@Component()
export class ThesisService {
  constructor(
    @Inject(Cons.InternModelToken) private readonly InternModel: Model<IThesis>,
    private readonly seminarCalculate: ThesisCalculate,
  ) { }
  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.InternModel.find().populate({ path: 'teachers._id' }));
  }
  create(createThesisDto: CreateThesisDto): Observable<ISeminar> {
    const calculatedThesisDto = this.seminarCalculate.calculate(createThesisDto);
    const createdThesis = new this.InternModel(calculatedThesisDto);
    return Observable.fromPromise(createdThesis.save());
  }
}
