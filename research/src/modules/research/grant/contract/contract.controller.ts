import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../../common/rabbitmq/rabbitmq.client';
import { ContractDto } from './contract.dto';
import { ContractService } from './contract.service';
import { ContractTransformer } from './contract.transformer';

@Controller('research/grant/contract')
export class ContractController {

  constructor(
    private readonly contractService: ContractService,
    private tranformer: ContractTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll( @Query('type') type: string): Observable<ContractDto[]> {
    return this.contractService.findAll({type})
      .map((results) => this.tranformer.collection(results));
  }

  @Post()
  create( @Res() res, @Body() createCatDto: ContractDto) {
    this.contractService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: ContractDto) {
    this.contractService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  async delete( @Res() res, @Param('id') id) {
    this.contractService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
