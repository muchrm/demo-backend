import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateSeminarDto } from '../dtos/create-seminar.dto';
import { SeminarService } from '../services/seminar.service';
import { TeacherSeminarTransformer } from '../transformers/teacher-seminar.transformer';

@Controller('teacher/workteach/seminar')
export class TeacherSeminarController {

  constructor(
    private readonly seminarService: SeminarService,
    private tranformer: TeacherSeminarTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findByTeacher( @Headers('x-consumer-custom-id') teacherId, @Query('type') type: string, @Query('level') levelName: string) {
    this.tranformer.setTeacherId(teacherId);
    return this.seminarService.findByTeacher(teacherId, { type, levelName })
      .map((results) => this.tranformer.collection(results));
  }
}
