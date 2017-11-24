import { Component } from '@nestjs/common';
import { Transformer } from '../../common/transformer';

@Component()
export class SeminarTransformer extends Transformer {
  transform(data) {
    console.log(data);
    return {
      id: data._id,
      courseCode: data.courseCode,
      semester: data.semester,
      year: data.year,
      name: data.name,
      teachers: data.teachers,
    };
  }
}
