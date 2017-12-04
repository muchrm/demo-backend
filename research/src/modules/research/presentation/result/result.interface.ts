import { Document } from 'mongoose';
export interface IResult extends Document {
  courseCode: number;
  courseName: string;
  courseType: string;
  countStudent: number;
  semester: number;
  year: number;
  type: string;
  teachers: any[];
}
