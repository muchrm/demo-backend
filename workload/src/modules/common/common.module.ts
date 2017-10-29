import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';

@Module({
  modules:[
    DatabaseModule,
    RabbitMQModule
  ],
  exports: [
    DatabaseModule,
    RabbitMQModule
  ],
})
export class CommonModule { }
