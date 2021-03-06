import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateThesisDto } from './create-thesis.dto';
import { TeacherThesisTransformer } from './teacher-thesis.transformer';
import { ThesisService } from './thesis.service';

@Controller('teacher/workteach/thesis')
export class TeacherTeacherThesisController {

  constructor(
    private readonly thesisService: ThesisService,
    private tranformer: TeacherThesisTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {}

  @Get()
  findByTeacher( @Headers('x-consumer-custom-id') teacherId) {
    this.tranformer.setTeacherId(teacherId);
    return this.thesisService.findByTeacher(teacherId)
      .map((results) => this.tranformer.collection(results));
  }
}
