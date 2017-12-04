import { Document } from 'mongoose';
export interface IThesis extends Document {
  commandId: string;
  date: string;
  type: string;
  courseCode: number;
  semester: number;
  year: number;
  courseName: string;
  name: string;
  studentCode: string;
  credit: number;
  teachers: any[];
}
