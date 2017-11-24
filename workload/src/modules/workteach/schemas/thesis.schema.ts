import * as mongoose from 'mongoose';

export const ThesisSchema = new mongoose.Schema({
  commandId: String,
  date: String,
  type: String,
  courseCode: Number,
  semester: Number,
  year: Number,
  courseName: String,
  name: String,
  studentCode: String,
  credit: Number,
  teachers: [{
    _id: mongoose.Schema.Types.ObjectId,
    position: String,
    name: String,
    lastname: String,
    point: Number,
    appointment: String,
    percent: String,
  }],
});
