import { Component } from '@nestjs/common';
import * as _ from 'lodash';
import { Transformer } from '../../common/transformer';

@Component()
export class TeacherProjectAndSpecialProblemTransformer extends Transformer {
  transform(data) {
    const teacher = _.find(data.teachers, (x) => String(x.id) === this.teacherId);
    return {
      id: data._id,
      courseCode: data.courseCode,
      semester: data.semester,
      year: data.year,
      name: data.name,
      credit: data.credit,
      teachers: teacher.point,
    };
  }
}
