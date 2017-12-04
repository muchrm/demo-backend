import { Document } from 'mongoose';
export interface IAcademic extends Document {
  courseCode: number;
  courseName: string;
  courseType: string;
  countStudent: number;
  semester: number;
  year: number;
  type: string;
  teachers: any[];
}
