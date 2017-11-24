import * as mongoose from 'mongoose';

export const LectureLabSchema = new mongoose.Schema({
  courseCodes: [Number],
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
