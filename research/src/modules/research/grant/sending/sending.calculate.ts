import { Component } from '@nestjs/common';
import { SendingDto } from './sending.dto';
@Component()
export class SendingCalculate {
  constructor() { }
  calculate(createSendingDto: SendingDto) {
    return createSendingDto;
  }
}
