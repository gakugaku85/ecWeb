// tangen.js
import { Base } from "./base";
import { Circuit } from "./circuit";

export class Tangen {
  constructor(array) {
    this.id = array[0];
    this.name = array[1];
    this.level = array[2];
  }
  static find(id) {
    return Base.findOne("Tangen", "id", id).then(array => {
      return new Tangen(array);
    });
  }

  static tangenAll() {
    return Base.findMany("Tangen", "publish", "1", "0").then(array => {
      return array.map(x => {
        return new Tangen(x);
      });
    });
  }

  circuits() {
    return Base.findMany("Circuit", "tangen_id", this.id, 1).then(array => {
      return array.map(line => {
        return new Circuit(line);
      });
    });
  }
}
