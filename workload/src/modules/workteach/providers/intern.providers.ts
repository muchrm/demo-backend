import { Connection } from 'mongoose';
import { Database as DB} from '../../common/database/constants';
import { Constants as Cons } from '../constants';
import { InternSchema } from '../schemas/intern.schema';
export const InternProviders = [
  {
    provide: Cons.InternModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.WorkteachIntern, InternSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
