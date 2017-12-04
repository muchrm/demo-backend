import { Connection } from 'mongoose';
import { Database as DB} from '../../../common/database/constants';
import { Constants as Cons } from './constants';
import { SendingSchema } from './sending.schema';
export const SendingProviders = [
  {
    provide: Cons.SendingModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.ResearchGrantSending, SendingSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
