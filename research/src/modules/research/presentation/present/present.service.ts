import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { Constants as Cons } from './constants';
import { PresentCalculate } from './present.calculate';
import { PresentDto } from './present.dto';
import { IPresent } from './present.interface';
@Component()
export class PresentService {
  constructor(
    @Inject(Cons.PresentModelToken) private readonly PresentModel: Model<IPresent>,
    private readonly presentCalculate: PresentCalculate,
  ) { }

  findAll(option): Observable<any[]> {
    return Observable.fromPromise(this.PresentModel.find(option));
  }

  findByTeacher(id, option): Observable<any[]> {
    option.teachers = { $elemMatch: { id } };
    return Observable.fromPromise(this.PresentModel.find(option));
  }

  create(createPresentDto: PresentDto): Observable<IPresent> {
    const calculatedPresentDto = this.presentCalculate.calculate(createPresentDto);
    const createdPresent = new this.PresentModel(calculatedPresentDto);
    return Observable.fromPromise(createdPresent.save());
  }

  update(id: string, createPresentDto: PresentDto): Observable<IPresent> {
    const calculatedPresentDto = this.presentCalculate.calculate(createPresentDto);
    return Observable.fromPromise(this.PresentModel.findOneAndUpdate({ _id: id }, calculatedPresentDto));
  }

  delete(id: string) {
    return Observable.fromPromise(this.PresentModel.find({ _id: id }).remove());
  }
}
