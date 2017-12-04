import { Connection } from 'mongoose';
import { Database as DB} from '../../../common/database/constants';
import { Constants as Cons } from './constants';
import { ResultSchema } from './result.schema';
export const ResultProviders = [
  {
    provide: Cons.ResultModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.ResearchPresentrationResult, ResultSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
