import { Connection } from 'mongoose';
import { Database as DB} from '../common/database/constants';
import { Teacher } from './constants';
import { TeachersSchema } from './schemas/teachers.schema';
export const TeachersProviders = [
  {
    provide: Teacher.TeacherModelToken,
    // useFactory: (connection: Connection) => connection.model(Teacher.Teacher, TeachersSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
