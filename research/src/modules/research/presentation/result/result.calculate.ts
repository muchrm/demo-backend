import { Component } from '@nestjs/common';
import { ResultDto } from './result.dto';
@Component()
export class ResultCalculate {
  constructor() { }
  calculate(createResultDto: ResultDto) {
    return createResultDto;
  }
}
