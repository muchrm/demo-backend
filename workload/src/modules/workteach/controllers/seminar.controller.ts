import { Controller, Get, Inject } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants} from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateSeminarDto } from '../dtos/create-seminar.dto';
import { SeminarService } from '../services/seminar.service';
import { SeminarTransformer } from '../transformers/seminar.transformer';

@Controller('workteach/seminar')
export class SeminarController {

  constructor(
    private readonly internService: SeminarService,
    private tranformer: SeminarTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll(): Observable<CreateSeminarDto[]> {
    return this.internService.findAll()
      .map((results) => this.tranformer.collection(results));
  }
}
