import { Component } from '@nestjs/common';
import * as _ from 'lodash';
import { Transformer } from '../../common/transformer';

@Component()
export class TeacherThesisTransformer extends Transformer {
  transform(data) {
    const teacher = _.find(data.teachers, (x) => String(x.id) === this.teacherId);
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
      teachers: teacher.point,
    };
  }
}
