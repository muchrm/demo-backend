import { Component } from '@nestjs/common';
import { PresentDto } from './present.dto';
@Component()
export class PresentCalculate {
  constructor() { }
  calculate(createPresentDto: PresentDto) {
    return createPresentDto;
  }
}
