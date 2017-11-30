import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { ContractDto } from './contract.dto';

@Controller('workteach/intern')
export class InternController {

  constructor(
  ) {}

  @Get()
  findAll( @Query('type') type: string): Observable<ContractDto[]> {
    return Observable.of([]);
  }

  @Post()
  create( @Res() res, @Body() createCatDto: ContractDto) {
    return true;
  }

  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: ContractDto) {
    return true;
  }

  @Delete(':id')
  delete( @Res() res, @Param('id') id) {
    return true;
  }
}
