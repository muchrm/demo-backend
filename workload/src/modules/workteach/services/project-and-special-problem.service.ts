import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { ProjectAndSpecialProblemCalculate } from '../calculates/project-and-special-problem.calculate';
import { Constants as Cons } from '../constants';
import { CreateProjectAndSpecialProblemDto } from '../dtos/create-project-and-special-problem.dto';
import { IProjectAndSpecialProblem } from '../interfaces/project-and-special-problem.interface';

@Component()
export class ProjectAndSpecialProblemService {
  constructor(
    @Inject(Cons.ProjectAndSpecialProblemModelToken) private readonly projectAndSpecialProblemModel: Model<IProjectAndSpecialProblem>,
    private readonly projectAndSpecialProblemCalculate: ProjectAndSpecialProblemCalculate,
  ) { }

  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.projectAndSpecialProblemModel.find());

  }

  create(createProjectAndSpecialProblemDto: CreateProjectAndSpecialProblemDto): Observable<IProjectAndSpecialProblem> {
    const calculatedProjectAndSpecialProblemDto = this.projectAndSpecialProblemCalculate.calculate(createProjectAndSpecialProblemDto);
    const createdProjectAndSpecialProblem = new this.projectAndSpecialProblemModel(calculatedProjectAndSpecialProblemDto);
    return Observable.fromPromise(createdProjectAndSpecialProblem.save());
  }

  update(id: string, createProjectAndSpecialProblemDto: CreateProjectAndSpecialProblemDto): Observable<IProjectAndSpecialProblem> {
    const calculatedProjectAndSpecialProblemDto = this.projectAndSpecialProblemCalculate.calculate(createProjectAndSpecialProblemDto);
    return Observable.fromPromise(this.projectAndSpecialProblemModel.findOneAndUpdate({ _id: id }, calculatedProjectAndSpecialProblemDto));
  }

  delete(id: string) {
    return Observable.fromPromise(this.projectAndSpecialProblemModel.find({ _id: id }).remove());
  }
}
