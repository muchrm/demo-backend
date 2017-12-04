import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../../common/rabbitmq/rabbitmq.client';
import { ResultDto } from './result.dto';
import { ResultService } from './result.service';
import { ResultTransformer } from './result.transformer';

@Controller('research/presentation/result')
export class ResultController {

  constructor(
    private readonly resultService: ResultService,
    private tranformer: ResultTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll( @Query('type') type: string): Observable<ResultDto[]> {
    return this.resultService.findAll({type})
      .map((results) => this.tranformer.collection(results));
  }

  @Post()
  create( @Res() res, @Body() createCatDto: ResultDto) {
    this.resultService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: ResultDto) {
    this.resultService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  async delete( @Res() res, @Param('id') id) {
    this.resultService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
