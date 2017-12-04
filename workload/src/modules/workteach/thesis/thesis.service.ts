import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { Constants as Cons } from './constants';
import { CreateThesisDto } from './create-thesis.dto';
import { ThesisCalculate } from './thesis.calculate';
import { IThesis } from './thesis.interface';

@Component()
export class ThesisService {
  constructor(
    @Inject(Cons.ThesisModelToken) private readonly thesisModel: Model<IThesis>,
    private readonly thesisCalculate: ThesisCalculate,
  ) { }
  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.thesisModel.find());
  }

  findByTeacher(id): Observable<any[]> {
    return Observable.fromPromise(this.thesisModel.find({ teachers: { $elemMatch: { id } } }));
  }

  create(createThesisDto: CreateThesisDto): Observable<IThesis> {
    const calculatedThesisDto = this.thesisCalculate.calculate(createThesisDto);
    const createdThesis = new this.thesisModel(calculatedThesisDto);
    return Observable.fromPromise(createdThesis.save());
  }

  update(id: string, createThesisDto: CreateThesisDto): Observable<IThesis> {
    const calculatedThesisDto = this.thesisCalculate.calculate(createThesisDto);
    return Observable.fromPromise(this.thesisModel.findOneAndUpdate({ _id: id }, calculatedThesisDto));
  }

  delete(id: string) {
    return Observable.fromPromise(this.thesisModel.find({ _id: id }).remove());
  }
}
