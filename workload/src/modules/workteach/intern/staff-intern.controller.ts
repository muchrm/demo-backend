import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateInternDto } from './create-intern.dto';
import { InternService } from './intern.service';
import { StaffInternTransformer } from './staff-intern.transformer';

@Controller('staff/workteach/intern')
export class StaffInternController {

  constructor(
    private readonly internService: InternService,
    private tranformer: StaffInternTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll( @Query('type') type: string): Observable<CreateInternDto[]> {
    return this.internService.findAll({type})
      .map((results) => this.tranformer.collection(results));
  }

  @Post()
  create( @Res() res, @Body() createCatDto: CreateInternDto) {
    this.internService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: CreateInternDto) {
    this.internService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  async delete( @Res() res, @Param('id') id) {
    this.internService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
