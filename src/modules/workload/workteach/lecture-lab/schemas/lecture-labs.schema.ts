import * as mongoose from 'mongoose';

export const LectureLabsSchema = new mongoose.Schema({
  courseCodes: [Number],
  teachers:[{
    _id:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Teacher'
    }
  }]
});
