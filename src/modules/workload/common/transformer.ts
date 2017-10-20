export abstract class Transformer {
  collection(datas) {
    return datas.map((data) => this.item(data));
  }
  item(data) {
    return this.transform(data.toObject());
  }
  abstract transform(data);
}
