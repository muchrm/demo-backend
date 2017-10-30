import { Constants } from './constants';
import { RabbitMQClient } from './rabbitmq.client';

export const rabbitMQProviders = [
  {
    provide: Constants.CONNECTION_TOKEN,
    useFactory: () => {
      return new RabbitMQClient(`amqp://${Constants.USER}:${Constants.PASS}@${Constants.HOST}`, Constants.CHANEL);
    },
  },
];
