import { Document } from 'mongoose';
export interface IProjectAndSpecialProblem extends Document {
  courseCodes: number[];
}
