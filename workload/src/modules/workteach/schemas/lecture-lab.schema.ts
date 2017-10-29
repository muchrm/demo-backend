import * as mongoose from 'mongoose';

export const LectureLabSchema = new mongoose.Schema({
  courseCodes: [Number],
  teachers: [{
    _id: mongoose.Schema.Types.ObjectId,
  }],
});
