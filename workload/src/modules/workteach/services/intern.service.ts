import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { InternCalculate } from '../calculates/intern.calculate';
import { Constants as Cons } from '../constants';
import { CreateInternDto } from '../dtos/create-intern.dto';
import { IIntern } from '../interfaces/intern.interface';

@Component()
export class InternService {
  constructor(
    @Inject(Cons.InternModelToken) private readonly InternModel: Model<IIntern>,
    private readonly internCalculate: InternCalculate,
  ) { }
  findAll(option): Observable<any[]> {
    return Observable.fromPromise(this.InternModel.find(option));
  }
  findByTeacher(id, option): Observable<any[]> {
    option.teachers = { $elemMatch: { id } };
    return Observable.fromPromise(this.InternModel.find(option));
  }
  create(createInternDto: CreateInternDto): Observable<IIntern> {
    const calculatedInternDto = this.internCalculate.calculate(createInternDto);
    const createdIntern = new this.InternModel(calculatedInternDto);
    return Observable.fromPromise(createdIntern.save());
  }
  update(id: string, createInternDto: CreateInternDto): Observable<IIntern> {
    const calculatedInternDto = this.internCalculate.calculate(createInternDto);
    return Observable.fromPromise(this.InternModel.findOneAndUpdate({ _id: id }, calculatedInternDto));
  }
  delete(id: string) {
    return Observable.fromPromise(this.InternModel.find({ _id: id }).remove());
  }
}
