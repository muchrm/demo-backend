import { Document } from 'mongoose';
export interface ISeminar extends Document {
  courseCode: number;
  semester: number;
  year: number;
  name: string;
  teachers: any[];
}
