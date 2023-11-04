// question.js
export class Question {
  constructor(circuit, array) {
    this.id = array[0];
    let questionNum = circuit.question_num;
    let ansNum = circuit.ans_num;
    this.array = array;
    this.question = array.slice(2, questionNum + 2);
    this.ans = array.slice(questionNum + 2, questionNum + ansNum + 2);
  }
}
