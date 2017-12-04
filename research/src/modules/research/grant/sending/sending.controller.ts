import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../../common/rabbitmq/rabbitmq.client';
import { SendingDto } from './sending.dto';
import { SendingService } from './sending.service';
import { SendingTransformer } from './sending.transformer';

@Controller('research/grant/sending')
export class SendingController {

  constructor(
    private readonly sendingService: SendingService,
    private tranformer: SendingTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll( @Query('type') type: string): Observable<SendingDto[]> {
    return this.sendingService.findAll({type})
      .map((results) => this.tranformer.collection(results));
  }

  @Post()
  create( @Res() res, @Body() createCatDto: SendingDto) {
    this.sendingService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: SendingDto) {
    this.sendingService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  async delete( @Res() res, @Param('id') id) {
    this.sendingService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
