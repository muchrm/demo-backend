import * as mongoose from 'mongoose';

export const SeminarSchema = new mongoose.Schema({
  courseCode: Number,
  semester: Number,
  year: Number,
  name: String,
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
