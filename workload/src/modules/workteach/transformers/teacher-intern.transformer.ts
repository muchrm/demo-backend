import { Component } from '@nestjs/common';
import * as _ from 'lodash';
import { Transformer } from '../../common/transformer';

@Component()
export class TeacherInternTransformer extends Transformer {
  private teacherId: string;
  setTeacherId(id) {
    this.teacherId = id;
  }
  transform(data) {
    const teacher = _.find(data.teachers, (x) => String(x.id) === this.teacherId);
    return {
      id: data._id,
      courseCode: data.courseCode,
      courseName: data.courseName,
      courseType: data.courseType,
      countStudent: data.countStudent,
      semester: data.semester,
      year: data.year,
      type: data.type,
      point: teacher.point,
    };
  }
}
