import { Component } from '@nestjs/common';
import { Transformer } from '../../common/transformer';

@Component()
export class StaffProjectAndSpecialProblemTransformer extends Transformer {
  transform(data) {
    return {
      id: data._id,
      courseCode: data.courseCode,
      semester: data.semester,
      year: data.year,
      name: data.name,
      credit: data.credit,
      teachers: data.teachers,
    };
  }
}
