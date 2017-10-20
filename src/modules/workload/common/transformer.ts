import * as _ from 'lodash';
export abstract class Transformer {
  collection(datas) {
    return datas.map((data) => this.item(data));
  }
  item(data) {
    return this.transform(data.toObject());
  }
  abstract transform(data);
  sortTeachers(data, teacherId) {
    return _.sortBy(data.teachers || [], (teacher) => {
      return teacher._id !== teacherId;
    });
  }
}
