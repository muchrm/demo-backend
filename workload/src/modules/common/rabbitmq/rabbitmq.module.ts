import { Module } from '@nestjs/common';
import { rabbitMQProviders } from './rabbitmq.provider';

@Module({
  components:[
    ...rabbitMQProviders
  ],
  exports: [
    ...rabbitMQProviders
  ],
})
export class RabbitMQModule { }
