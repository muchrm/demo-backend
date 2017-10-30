import { Connection } from 'mongoose';
import { Database as DB} from '../../common/database/constants';
import { Constants as Cons } from '../constants';
import { ThesisSchema } from '../schemas/thesis.schema';
export const ThesisProviders = [
  {
    provide: Cons.ThesisModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.WorkteachThesis, ThesisSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
