import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { Constants as Cons } from '../constants';
import { CreateProjectAndSpecialProblemDto } from '../dtos/create-project-and-special-problem.dto';
import { IProjectAndSpecialProblem } from '../interfaces/project-and-special-problem.interface';

@Component()
export class ProjectAndSpecialProblemService {
  constructor(
    @Inject(Cons.ProjectAndSpecialProblemModelToken) private readonly ProjectAndSpecialProblemModel: Model<IProjectAndSpecialProblem>,
  ) { }
  findAll(): Observable<any[]> {
    return Observable.fromPromise(this.ProjectAndSpecialProblemModel.find().populate({ path: 'teachers._id' }));

  }
  create(createProjectAndSpecialProblemDto: CreateProjectAndSpecialProblemDto): Observable<IProjectAndSpecialProblem> {
    const createdProjectAndSpecialProblem = new this.ProjectAndSpecialProblemModel(createProjectAndSpecialProblemDto);
    return Observable.fromPromise(createdProjectAndSpecialProblem.save());
  }
}
