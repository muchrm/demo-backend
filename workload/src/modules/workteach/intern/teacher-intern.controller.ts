import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateInternDto } from './create-intern.dto';
import { InternService } from './intern.service';
import { TeacherInternTransformer } from './teacher-intern.transformer';

@Controller('teacher/workteach/intern')
export class TeacherInternController {

  constructor(
    private readonly internService: InternService,
    private tranformer: TeacherInternTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {}

  @Get()
  findByTeacher( @Headers('x-consumer-custom-id') teacherId, @Query('type') type: string) {
    this.tranformer.setTeacherId(teacherId);
    return this.internService.findByTeacher(teacherId, { type })
      .map((results) => this.tranformer.collection(results));
  }
}
