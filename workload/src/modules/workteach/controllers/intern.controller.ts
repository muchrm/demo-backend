import { Controller, Get, Inject, Post } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateInternDto } from '../dtos/create-intern.dto';
import { InternService } from '../services/intern.service';
import { InternTransformer } from '../transformers/intern.transformer';

@Controller('workteach/intern')
export class InternController {

  constructor(
    private readonly internService: InternService,
    private tranformer: InternTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll(): Observable<CreateInternDto[]> {
    return this.internService.findAll()
      .map((results) => this.tranformer.collection(results));
  }

  @Post()
  add() {
    return {};
  }
}
