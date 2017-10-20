import { Connection } from 'mongoose';
import { LectureLab as Cons } from './constants';
import { LectureLabsSchema } from './schemas/lecture-labs.schema';
export const LectureLabsProviders = [
  {
    provide: Cons.LectureLabModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.WorkteachLectureLab, LectureLabsSchema),
    inject: [Cons.DbConnectionToken],
  },
];
