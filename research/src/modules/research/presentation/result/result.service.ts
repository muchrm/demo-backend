import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { Constants as Cons } from './constants';
import { ResultCalculate } from './result.calculate';
import { ResultDto } from './result.dto';
import { IResult } from './result.interface';
@Component()
export class ResultService {
  constructor(
    @Inject(Cons.ResultModelToken) private readonly resultModel: Model<IResult>,
    private readonly resultCalculate: ResultCalculate,
  ) { }

  findAll(option): Observable<any[]> {
    return Observable.fromPromise(this.resultModel.find(option));
  }

  findByTeacher(id, option): Observable<any[]> {
    option.teachers = { $elemMatch: { id } };
    return Observable.fromPromise(this.resultModel.find(option));
  }

  create(createResultDto: ResultDto): Observable<IResult> {
    const calculatedResultDto = this.resultCalculate.calculate(createResultDto);
    const createdResult = new this.resultModel(calculatedResultDto);
    return Observable.fromPromise(createdResult.save());
  }

  update(id: string, createResultDto: ResultDto): Observable<IResult> {
    const calculatedResultDto = this.resultCalculate.calculate(createResultDto);
    return Observable.fromPromise(this.resultModel.findOneAndUpdate({ _id: id }, calculatedResultDto));
  }

  delete(id: string) {
    return Observable.fromPromise(this.resultModel.find({ _id: id }).remove());
  }
}
