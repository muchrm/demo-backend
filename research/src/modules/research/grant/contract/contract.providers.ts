import { Connection } from 'mongoose';
import { Database as DB} from '../../../common/database/constants';
import { Constants as Cons } from './constants';
import { ContractSchema } from './contract.schema';
export const ContractProviders = [
  {
    provide: Cons.ContractModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.ResearchGrantContract, ContractSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
