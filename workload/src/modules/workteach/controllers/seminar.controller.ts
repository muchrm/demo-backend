import { Body, Controller, Get, Inject, Post, Res, HttpStatus } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateSeminarDto } from '../dtos/create-seminar.dto';
import { SeminarService } from '../services/seminar.service';
import { SeminarTransformer } from '../transformers/seminar.transformer';

@Controller('workteach/seminar')
export class SeminarController {

  constructor(
    private readonly seminarService: SeminarService,
    private tranformer: SeminarTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll(): Observable<CreateSeminarDto[]> {
    return this.seminarService.findAll()
      .map((results) => this.tranformer.collection(results));
  }
  @Post()
  create( @Res() res, @Body() createCatDto: CreateSeminarDto) {
    return res.status(HttpStatus.CREATED).send(this.seminarService.create(createCatDto));
  }
}
