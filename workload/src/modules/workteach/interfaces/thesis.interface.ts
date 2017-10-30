import { Document } from 'mongoose';
export interface IThesis extends Document {
  courseCodes: number[];
}
