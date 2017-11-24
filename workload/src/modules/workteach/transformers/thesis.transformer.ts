import { Component } from '@nestjs/common';
import { Transformer } from '../../common/transformer';

@Component()
export class ThesisTransformer extends Transformer {
  transform(data) {
    console.log(data);
    return {
      id: data._id,
      commandId: data.commandId,
      date: data.date,
      type: data.type,
      courseCode: data.courseCode,
      semester: data.semester,
      year: data.year,
      courseName: data.courseName,
      name: data.name,
      studentCode: data.studentCode,
      credit: data.credit,
      teachers: data.teachers,
    };
  }
}
