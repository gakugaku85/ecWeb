//user.js
import { sha256 } from "js-sha256";
import { Base } from "./base";

export class User {
  constructor(array) {
    this.id = parseInt(array[0]);
    this.gakuseiNum = parseInt(array[1]);
    this.gakuseiName = array[2];
  }

  static findByNum(gakuseiNum, pass) {
    return Base.findOne("User", "gakusei_num", gakuseiNum).then(array => {
      return array.length > 0 && sha256(pass) == array[3]
        ? new User(array)
        : null;
    });
  }
}

export default { User };
