import { Controller, Get, Inject } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants} from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateLectureLabDto } from './dtos/create-lecture-lab.dto';
import { LectureLabService } from './lecture-lab.service';
import { LectureLabTransformer } from './transformer/lecture-lab.transformer';

@Controller('workteach/lecture-lab')
export class LectureLabController {

  constructor(
    private readonly lectureLabService: LectureLabService,
    private tranformer: LectureLabTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll(): Observable<CreateLectureLabDto[]> {
    return this.lectureLabService.findAll()
      .map((results) => this.tranformer.collection(results));
  }
  @Get('test')
  findAll2(): Observable<number> {
    const pattern = { teacher: 'getUser' };
    return this.client.send<number>(pattern, 1);
  }
}
