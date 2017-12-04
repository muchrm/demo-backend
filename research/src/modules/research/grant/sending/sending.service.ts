import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { Constants as Cons } from './constants';
import { SendingCalculate } from './sending.calculate';
import { SendingDto } from './sending.dto';
import { ISending } from './sending.interface';
@Component()
export class SendingService {
  constructor(
    @Inject(Cons.SendingModelToken) private readonly SendingModel: Model<ISending>,
    private readonly sendingCalculate: SendingCalculate,
  ) { }

  findAll(option): Observable<any[]> {
    return Observable.fromPromise(this.SendingModel.find(option));
  }

  findByTeacher(id, option): Observable<any[]> {
    option.teachers = { $elemMatch: { id } };
    return Observable.fromPromise(this.SendingModel.find(option));
  }

  create(createSendingDto: SendingDto): Observable<ISending> {
    const calculatedSendingDto = this.sendingCalculate.calculate(createSendingDto);
    const createdSending = new this.SendingModel(calculatedSendingDto);
    return Observable.fromPromise(createdSending.save());
  }

  update(id: string, createSendingDto: SendingDto): Observable<ISending> {
    const calculatedSendingDto = this.sendingCalculate.calculate(createSendingDto);
    return Observable.fromPromise(this.SendingModel.findOneAndUpdate({ _id: id }, calculatedSendingDto));
  }

  delete(id: string) {
    return Observable.fromPromise(this.SendingModel.find({ _id: id }).remove());
  }
}
