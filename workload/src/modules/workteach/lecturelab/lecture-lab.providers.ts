import { Connection } from 'mongoose';
import { Database as DB} from '../../common/database/constants';
import { Constants as Cons } from './constants';
import { LectureLabSchema } from './lecture-lab.schema';
export const LectureLabProviders = [
  {
    provide: Cons.LectureLabModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.WorkteachLectureLab, LectureLabSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
