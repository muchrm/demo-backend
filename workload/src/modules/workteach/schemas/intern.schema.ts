import * as mongoose from 'mongoose';

export const InternSchema = new mongoose.Schema({
  courseCode: Number,
  courseName: String,
  courseType: String,
  countStudent: Number,
  semester: Number,
  year: Number,
  type: String,
  teachers: [{
    _id: mongoose.Schema.Types.ObjectId,
    point: Number,
  }],
});
