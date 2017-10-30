import * as mongoose from 'mongoose';

export const SeminarSchema = new mongoose.Schema({
  countStudent: Number,
  courseType: String,
  type: String,
  teachers: [{
    _id: mongoose.Schema.Types.ObjectId,
    point: Number,
  }],
});
