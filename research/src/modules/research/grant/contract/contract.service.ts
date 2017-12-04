import { Component, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs/Rx';
import { Constants as Cons } from './constants';
import { ContractCalculate } from './contract.calculate';
import { ContractDto } from './contract.dto';
import { IContract } from './contract.interface';
@Component()
export class ContractService {
  constructor(
    @Inject(Cons.ContractModelToken) private readonly ContractModel: Model<IContract>,
    private readonly contractCalculate: ContractCalculate,
  ) { }

  findAll(option): Observable<any[]> {
    return Observable.fromPromise(this.ContractModel.find(option));
  }

  findByTeacher(id, option): Observable<any[]> {
    option.teachers = { $elemMatch: { id } };
    return Observable.fromPromise(this.ContractModel.find(option));
  }

  create(createContractDto: ContractDto): Observable<IContract> {
    const calculatedContractDto = this.contractCalculate.calculate(createContractDto);
    const createdContract = new this.ContractModel(calculatedContractDto);
    return Observable.fromPromise(createdContract.save());
  }

  update(id: string, createContractDto: ContractDto): Observable<IContract> {
    const calculatedContractDto = this.contractCalculate.calculate(createContractDto);
    return Observable.fromPromise(this.ContractModel.findOneAndUpdate({ _id: id }, calculatedContractDto));
  }

  delete(id: string) {
    return Observable.fromPromise(this.ContractModel.find({ _id: id }).remove());
  }
}
