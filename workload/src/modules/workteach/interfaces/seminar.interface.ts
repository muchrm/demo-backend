import { Document } from 'mongoose';
export interface ISeminar extends Document {
  courseCodes: number[];
}
