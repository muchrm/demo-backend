import { Component } from '@nestjs/common';
import { Transformer } from '../../common/transformer';

@Component()
export class ThesisTransformer extends Transformer {
  transform(data) {
    console.log(data);
    return {
      id: data._id,
      courseCodes: data.courseCodes,
    };
  }
}
