import * as mongoose from 'mongoose';

export const ProjectAndSpecialProblemSchema = new mongoose.Schema({
  courseCode: Number,
  semester: Number,
  year: Number,
  name: String,
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
