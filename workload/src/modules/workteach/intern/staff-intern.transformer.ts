import { Component } from '@nestjs/common';
import { Transformer } from '../../common/transformer';

@Component()
export class StaffInternTransformer extends Transformer {
  transform(data) {
    return {
      id: data._id,
      courseCode: data.courseCode,
      courseName: data.courseName,
      courseType: data.courseType,
      countStudent: data.countStudent,
      semester: data.semester,
      year: data.year,
      type: data.type,
      teachers: data.teachers,
    };
  }
}
