import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class StatusController {

  @Get()
  findAll() {
    return 'service healthly';
  }
}
