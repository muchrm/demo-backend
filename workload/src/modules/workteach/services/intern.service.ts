import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { Constants as Cons } from '../constants';
import { CreateInternDto } from '../dtos/create-intern.dto';
import { IIntern } from '../interfaces/intern.interface';

@Component()
export class InternService {
  constructor(
    @Inject(Cons.InternModelToken) private readonly InternModel: Model<IIntern>,
  ) { }
  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.InternModel.find().populate({ path: 'teachers._id' }));

  }
  create(createInternDto: CreateInternDto): Observable<IIntern> {
    const createdIntern = new this.InternModel(createInternDto);
    return Observable.fromPromise(createdIntern.save());
  }
}
