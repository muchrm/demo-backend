import { Component } from '@nestjs/common';
import { AcademicDto } from './academic.dto';
@Component()
export class AcademicCalculate {
  constructor() { }
  calculate(createAcademicDto: AcademicDto) {
    return createAcademicDto;
  }
}
