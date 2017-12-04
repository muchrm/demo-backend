import * as mongoose from 'mongoose';

export const ContractSchema = new mongoose.Schema({
  courseCode: Number,
  courseName: String,
  courseType: String,
  countStudent: Number,
  semester: Number,
  year: Number,
  type: String,
  teachers: [{
    id: mongoose.Schema.Types.ObjectId,
    position: String,
    name: String,
    lastname: String,
    point: Number,
    appointment: String,
    percent: String,
  }],
});
