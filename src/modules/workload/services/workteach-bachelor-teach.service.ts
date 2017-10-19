import { Observable } from 'rxjs/Rx';
import { Component, Inject } from '@nestjs/common';
import { CreateWorkteachBachelorTeachDto } from '../dtos/workteach-bachelor-teach.dto';
import { IWorkteachBachelorTeach } from '../interfaces/workteach-bachelor-teach.interface';
import { Model } from 'mongoose';
import { WorkteachBachelorTeachsSchema } from '../schemas/workteach-bachelor-teachs.schema';

@Component()
export class WorkteachBachelorTeachService {
    constructor(
        @Inject('WorkteachBachelorTeachModelToken') private readonly workteachBachelorTeachModel: Model<WorkteachBachelorTeachsSchema>) { }
    findAll(): Observable<IWorkteachBachelorTeach[]> {
        return Observable.of([]);
    }
    create(createWorkteachBachelorTeachDto: CreateWorkteachBachelorTeachDto): Observable<IWorkteachBachelorTeach> {
        const createdCat = new this.workteachBachelorTeachModel(createWorkteachBachelorTeachDto);
        return Observable.fromPromise(createdCat.save());
    }
}