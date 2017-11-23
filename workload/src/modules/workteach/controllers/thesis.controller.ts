import { Body, Controller, Get, HttpStatus, Inject, Post, , Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants} from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateThesisDto } from '../dtos/create-thesis.dto';
import { ThesisService } from '../services/thesis.service';
import { ThesisTransformer } from '../transformers/thesis.transformer';

@Controller('workteach/thesis')
export class ThesisController {

  constructor(
    private readonly thesisService: ThesisService,
    private tranformer: ThesisTransformer,
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
    return res.status(HttpStatus.CREATED).send(this.thesisService.create(createCatDto));
  }
}
