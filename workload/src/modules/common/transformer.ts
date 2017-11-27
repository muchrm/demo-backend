import * as _ from 'lodash';
export abstract class Transformer {
  protected teacherId: string;
  setTeacherId(id) {
    this.teacherId = id;
  }
  collection(datas) {
    return datas.map((data) => this.item(data));
  }
  item(data) {
    return this.transform(data.toObject());
  }
  abstract transform(data);
  sortTeachers(data, teacherId) {
    return _.sortBy(data.teachers || [], (teacher) => {
      return teacher.id !== teacherId;
    });
  }
}
