import { Connection } from 'mongoose';
import { Database as DB} from '../../../common/database/constants';
import { Constants as Cons } from './constants';
import { PresentSchema } from './present.schema';
export const PresentProviders = [
  {
    provide: Cons.PresentModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.ResearchPresentrationPresent, PresentSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
