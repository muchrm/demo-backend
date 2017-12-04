import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants} from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateThesisDto } from './create-thesis.dto';
import { StaffThesisTransformer } from './staff-thesis.transformer';
import { ThesisService } from './thesis.service';

@Controller('staff/workteach/thesis')
export class StaffThesisController {

  constructor(
    private readonly thesisService: ThesisService,
    private tranformer: StaffThesisTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll(): Observable<CreateThesisDto[]> {
    return this.thesisService.findAll()
      .map((results) => this.tranformer.collection(results));
  }
  @Post()
  create( @Res() res, @Body() createCatDto: CreateThesisDto) {
    this.thesisService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: CreateThesisDto) {
    this.thesisService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  delete( @Res() res, @Param('id') id) {
    this.thesisService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
