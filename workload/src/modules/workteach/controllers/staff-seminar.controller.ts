import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateSeminarDto } from '../dtos/create-seminar.dto';
import { SeminarService } from '../services/seminar.service';
import { SeminarTransformer } from '../transformers/seminar.transformer';

@Controller('staff/workteach/seminar')
export class StaffSeminarController {

  constructor(
    private readonly seminarService: SeminarService,
    private tranformer: SeminarTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll( @Query('type') type: string, @Query('level') levelName: string): Observable<CreateSeminarDto[]> {
    return this.seminarService.findAll({ type, levelName })
      .map((results) => this.tranformer.collection(results));
  }
  @Post()
  create( @Res() res, @Body() createCatDto: CreateSeminarDto) {
    this.seminarService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: CreateSeminarDto) {
    this.seminarService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  delete( @Res() res, @Param('id') id) {
    this.seminarService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
