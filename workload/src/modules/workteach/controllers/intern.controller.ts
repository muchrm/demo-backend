import { Body, Controller, Delete,Get, HttpStatus, Inject, Query,Param,Post,Put, Res } from '@nestjs/common';
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
  findAll( @Query('type') type:string): Observable<CreateInternDto[]> {
    return this.internService.findAll(type)
      .map((results) => this.tranformer.collection(results));
  }

  @Post()
  create( @Res() res, @Body() createCatDto: CreateInternDto) {
    return res.status(HttpStatus.CREATED).send(this.internService.create(createCatDto));
  }
  @Put(':id')
  update( @Res() res,@Param('id') id,@Body() createCatDto: CreateInternDto) {
     this.internService.update(id,createCatDto).subscribe()
     return res.status(HttpStatus.CREATED).json({});
  }
  @Delete(':id')
  delete( @Res() res,@Param('id') id) {
    this.internService.delete(id).subscribe()
    return res.status(HttpStatus.CREATED).json({});
  }
}
