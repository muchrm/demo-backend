import { Component } from '@nestjs/common';
import { ContractDto } from './contract.dto';
const POINT_SUPERVISOR_ContractSHIP = 0.5;
const POINT_SUPERVISOR_COOPERATIVE = 1;
const POINT_INSTRUCTOR = 2;
@Component()
export class ContractCalculate {
  constructor() { }
  calculate(createContractDto: ContractDto) {
    return createContractDto;
  }
}
