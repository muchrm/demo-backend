import { Connection } from 'mongoose';
import { Database as DB} from '../../../common/database/constants';
import { Constants as Cons } from './constants';
import { AcademicSchema } from './academic.schema';
export const AcademicProviders = [
  {
    provide: Cons.AcademicModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.ResearchResultAcademic, AcademicSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
