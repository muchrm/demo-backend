import * as mongoose from 'mongoose';
import { Database as DB } from './constants';

export const databaseProviders = [
  {
    provide: DB.CONNECTION_TOKEN,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect(`mongodb://${DB.USERNAME}:${DB.PASSWORD}@${DB.HOST}:${DB.PORT}/${DB.NAME}`,
        {
          useMongoClient: true,
        });
    },
  },
];