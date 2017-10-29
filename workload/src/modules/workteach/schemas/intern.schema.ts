import * as mongoose from 'mongoose';

export const InternSchema = new mongoose.Schema({
  countStudent: Number,
  courseType: String,
  type: String,
  teachers: [{
    _id: mongoose.Schema.Types.ObjectId,
    point:Number
  }],
});
