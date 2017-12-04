import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../../common/rabbitmq/rabbitmq.client';
import { PresentDto } from './present.dto';
import { PresentService } from './present.service';
import { PresentTransformer } from './present.transformer';

@Controller('research/presentation/present')
export class PresentController {

  constructor(
    private readonly presentService: PresentService,
    private tranformer: PresentTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll( @Query('type') type: string): Observable<PresentDto[]> {
    return this.presentService.findAll({type})
      .map((results) => this.tranformer.collection(results));
  }

  @Post()
  create( @Res() res, @Body() createCatDto: PresentDto) {
    this.presentService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: PresentDto) {
    this.presentService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  async delete( @Res() res, @Param('id') id) {
    this.presentService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
