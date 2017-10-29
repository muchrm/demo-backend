import { Document } from 'mongoose';
export interface IIntern extends Document {
  courseCodes: number[];
}
