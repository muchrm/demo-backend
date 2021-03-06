import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants } from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateProjectAndSpecialProblemDto } from './create-project-and-special-problem.dto';
import { ProjectAndSpecialProblemService } from './project-and-special-problem.service';
import { StaffProjectAndSpecialProblemTransformer } from './staff-project-and-special-problem.transformer';

@Controller('staff/workteach/project-and-special-problem')
export class StaffProjectAndSpecialProblemController {

  constructor(
    private readonly projectAndSpecialProblemService: ProjectAndSpecialProblemService,
    private tranformer: StaffProjectAndSpecialProblemTransformer,
    @Inject(RabbitMQConstants.CONNECTION_TOKEN) private readonly client: ClientProxy,
  ) {
  }

  @Get()
  findAll(): Observable<CreateProjectAndSpecialProblemDto[]> {
    return this.projectAndSpecialProblemService.findAll()
      .map((results) => this.tranformer.collection(results));
  }
  @Post()
  create( @Res() res, @Body() createCatDto: CreateProjectAndSpecialProblemDto) {
    this.projectAndSpecialProblemService.create(createCatDto).subscribe(() => {
      res.status(HttpStatus.CREATED).json({});
    });
  }
  @Put(':id')
  update( @Res() res, @Param('id') id, @Body() createCatDto: CreateProjectAndSpecialProblemDto) {
    this.projectAndSpecialProblemService.update(id, createCatDto).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
  @Delete(':id')
  delete( @Res() res, @Param('id') id) {
    this.projectAndSpecialProblemService.delete(id).subscribe(() => {
      res.status(HttpStatus.OK).json({});
    });
  }
}
