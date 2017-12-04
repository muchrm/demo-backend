import { Connection } from 'mongoose';
import { Database as DB} from '../../common/database/constants';
import { Constants as Cons } from './constants';
import { SeminarSchema } from './seminar.schema';
export const SeminarProviders = [
  {
    provide: Cons.SeminarModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.WorkteachSeminar, SeminarSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
