// circuit.js
import { Question } from "../models/question";
import { Base } from "./base";
export class Circuit {
  constructor(array) {
    this.id = array[0];
    this.tangen_id = array[1];
    this.name = array[2];
    this.level = array[3];
    this.pic = array[4];
    this.fin_num = array[5];
    this.question_num = array[6];
    this.ans_num = array[7];
  }
  question_sub(array) {
    return array.map(line => {
      return new Question(this, line);
    });
  }
  findQuestions() {
    return Base.findMany("Question", "circuit_id", this.id, 1).then(array => {
      return array.map(line => {
        return new Question(this, line);
      });
    });
  }
}
