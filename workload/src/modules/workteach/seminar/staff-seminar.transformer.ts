import { Component } from '@nestjs/common';
import { Transformer } from '../../common/transformer';

@Component()
export class StaffSeminarTransformer extends Transformer {
  transform(data) {
    return {
      id: data._id,
      courseCode: data.courseCode,
      semester: data.semester,
      year: data.year,
      name: data.name,
      teachers: data.teachers,
      type: data.type,
      levelName: data.levelName,
    };
  }
}
