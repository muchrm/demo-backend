import { Body,Controller, Get, Inject, Post, HttpStatus, Res } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs/Rx';
import { Constants as RabbitMQConstants} from '../../common/rabbitmq/constants';
import { RabbitMQClient } from '../../common/rabbitmq/rabbitmq.client';
import { CreateProjectAndSpecialProblemDto } from '../dtos/create-project-and-special-problem.dto';
import { ProjectAndSpecialProblemService } from '../services/project-and-special-problem.service';
import { ProjectAndSpecialProblemTransformer } from '../transformers/project-and-special-problem.transformer';

@Controller('workteach/project-and-special-problem')
export class ProjectAndSpecialProblemController {

  constructor(
    private readonly projectAndSpecialProblemService: ProjectAndSpecialProblemService,
    private tranformer: ProjectAndSpecialProblemTransformer,
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
    // TODO: Add some logic here
    res.status(HttpStatus.CREATED).send(createCatDto);
  }
}
