import { Document } from 'mongoose';
export interface IProjectAndSpecialProblem extends Document {
  courseCode: number;
  semester: number;
  year: number;
  name: string;
  credit: number;
  teachers: any[];
}
