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
    @Inject(Cons.ThesisModelToken) private readonly thesisModel: Model<IThesis>,
    private readonly thesisCalculate: ThesisCalculate,
  ) { }
  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.thesisModel.find().populate({ path: 'teachers._id' }));
  }
  create(createThesisDto: CreateThesisDto): Observable<IThesis> {
    const calculatedThesisDto = this.thesisCalculate.calculate(createThesisDto);
    const createdThesis = new this.thesisModel(calculatedThesisDto);
    return Observable.fromPromise(createdThesis.save());
  }
}
