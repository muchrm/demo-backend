import { Connection } from 'mongoose';
import { Database as DB} from '../../common/database/constants';
import { Constants as Cons } from './constants';
import { ProjectAndSpecialProblemSchema } from './project-and-special-problem.schema';
export const ProjectAndSpecialProblemProviders = [
  {
    provide: Cons.ProjectAndSpecialProblemModelToken,
    useFactory: (connection: Connection) => connection.model(Cons.WorkteachProjectAndSpecialProblem, ProjectAndSpecialProblemSchema),
    inject: [DB.CONNECTION_TOKEN],
  },
];
