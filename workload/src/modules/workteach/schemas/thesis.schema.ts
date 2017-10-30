import * as mongoose from 'mongoose';

export const ThesisSchema = new mongoose.Schema({
  countStudent: Number,
  courseType: String,
  type: String,
  teachers: [{
    _id: mongoose.Schema.Types.ObjectId,
    point: Number,
  }],
});
