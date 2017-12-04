import { Component } from '@nestjs/common';
import * as _ from 'lodash';
import { Transformer } from '../../common/transformer';

@Component()
export class TeacherSeminarTransformer extends Transformer {
  transform(data) {
    const teacher = _.find(data.teachers, (x) => String(x.id) === this.teacherId);
    return {
      id: data._id,
      courseCode: data.courseCode,
      semester: data.semester,
      year: data.year,
      name: data.name,
      teachers: data.teachers,
      type: data.type,
      levelName: teacher.point,
    };
  }
}
