import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';

@Component()
export class ContractService {
  constructor(
  ) { }

  findAll(option): Observable<any[]> {
    return Observable.of([]);
  }

  findByTeacher(id, option): Observable<any[]> {
    return Observable.of([]);
  }

  create(createInternDto: any): Observable<any> {
    return Observable.of('');
  }

  update(id: string, createInternDto: any): Observable<any> {
    return Observable.of('');
  }

  delete(id: string) {
    return true;
  }
}
