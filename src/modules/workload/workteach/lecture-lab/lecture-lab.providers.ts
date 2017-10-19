import { Connection } from 'mongoose';
import { LectureLabsSchema } from './schemas/lecture-labs.schema';

export const LectureLabsProviders = [
  {
    provide: 'LectureLabModelToken',
    useFactory: (connection: Connection) => connection.model('ILectureLab', LectureLabsSchema),
    inject: ['DbConnectionToken'],
  },
];