import { Connection } from 'mongoose';
import { WorkteachBachelorTeachsSchema } from '../schemas/workteach-bachelor-teachs.schema';

export const WorkteachBachelorTeachsProviders = [
  {
    provide: 'WorkteachBachelorTeachModelToken',
    useFactory: (connection: Connection) => connection.model('WorkteachBachelorTeach', WorkteachBachelorTeachsSchema),
    inject: ['DbConnectionToken'],
  },
];