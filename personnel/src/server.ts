import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import * as bodyParser from 'body-parser';
import { ApplicationModule } from './modules/app.module';
import { Constants } from './modules/common/rabbitmq/constants';
import { RabbitMQServer } from './modules/common/rabbitmq/rabbitmq.server';
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.connectMicroservice({
    strategy: new RabbitMQServer(`amqp://${Constants.USER}:${Constants.PASS}@${Constants.HOST}`, Constants.CHANEL),
  });

  app.use(bodyParser.json());
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
