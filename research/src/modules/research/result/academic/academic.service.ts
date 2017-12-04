import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { AcademicCalculate } from './academic.calculate';
import { AcademicDto } from './academic.dto';
import { IAcademic } from './academic.interface';
import { Constants as Cons } from './constants';
@Component()
export class AcademicService {
  constructor(
    @Inject(Cons.AcademicModelToken) private readonly academicModel: Model<IAcademic>,
    private readonly academicCalculate: AcademicCalculate,
  ) { }

  findAll(option): Observable<any[]> {
    return Observable.fromPromise(this.academicModel.find(option));
  }

  findByTeacher(id, option): Observable<any[]> {
    option.teachers = { $elemMatch: { id } };
    return Observable.fromPromise(this.academicModel.find(option));
  }

  create(createAcademicDto: AcademicDto): Observable<IAcademic> {
    const calculatedAcademicDto = this.academicCalculate.calculate(createAcademicDto);
    const createdAcademic = new this.academicModel(calculatedAcademicDto);
    return Observable.fromPromise(createdAcademic.save());
  }

  update(id: string, createAcademicDto: AcademicDto): Observable<IAcademic> {
    const calculatedAcademicDto = this.academicCalculate.calculate(createAcademicDto);
    return Observable.fromPromise(this.academicModel.findOneAndUpdate({ _id: id }, calculatedAcademicDto));
  }

  delete(id: string) {
    return Observable.fromPromise(this.academicModel.find({ _id: id }).remove());
  }
}
