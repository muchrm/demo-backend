import { Body, Controller, Delete, Get, Headers, HttpStatus, Inject, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateProjectAndSpecialProblemDto } from '../dtos/create-project-and-special-problem.dto';
import { ProjectAndSpecialProblemService } from '../services/project-and-special-problem.service';
import { TeacherProjectAndSpecialProblemTransformer } from '../transformers/teacher-project-and-special-problem.transformer';

@Controller('teacher/workteach/project-and-special-problem')
export class TeacherProjectAndSpecialProblemController {

  constructor(
    private readonly projectAndSpecialProblemService: ProjectAndSpecialProblemService,
    private tranformer: TeacherProjectAndSpecialProblemTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findByTeacher( @Headers('x-consumer-custom-id') teacherId) {
    this.tranformer.setTeacherId(teacherId);
    return this.projectAndSpecialProblemService.findByTeacher(teacherId)
      .map((results) => this.tranformer.collection(results));
  }
}
