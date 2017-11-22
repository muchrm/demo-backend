import { Component } from '@nestjs/common';
import { Transformer } from '../../common/transformer';

@Component()
export class InternTransformer extends Transformer {
  transform(data) {
    return {
      id: data._id,
      courseCodes: data.courseCodes,
    };
  }
}
