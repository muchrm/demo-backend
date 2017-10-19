import { Connection } from 'mongoose';
import { LectureLabsSchema } from './schemas/lecture-labs.schema';
import { LectureLab as Cons } from './constants';
export const LectureLabsProviders = [
  {
    provide: Cons.LectureLabModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.WorkteachLectureLab, LectureLabsSchema),
    inject: [Cons.DbConnectionToken],
  },
];