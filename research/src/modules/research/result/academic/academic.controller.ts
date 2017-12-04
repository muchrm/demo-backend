import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../../common/rabbitmq/rabbitmq.client';
import { AcademicDto } from './academic.dto';
import { AcademicService } from './academic.service';
import { AcademicTransformer } from './academic.transformer';

@Controller('research/result/academic')
export class AcademicController {

  constructor(
    private readonly academicService: AcademicService,
    private tranformer: AcademicTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll( @Query('type') type: string): Observable<AcademicDto[]> {
    return this.academicService.findAll({type})
      .map((results) => this.tranformer.collection(results));
  }

  @Post()
  create( @Res() res, @Body() createCatDto: AcademicDto) {
    this.academicService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: AcademicDto) {
    this.academicService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  async delete( @Res() res, @Param('id') id) {
    this.academicService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
