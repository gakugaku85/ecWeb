// __test__/tangenTest.js
/* eslint-disable no-alert, no-console, no-undef */

import { Circuit } from "../src/models/circuit";
import { Question } from "../src/models/question";

let a, b, c;

beforeEach(() => {
  c = new Circuit([1, 1, "直列合成抵抗1", 3, "1.png", 5, 5, 3]);
  a = new Question(c, [1, 1, 1, 9, 3, 10, 2, 3, 5, 1]);
  b = new Question(c, [2, 1, 1, 6, 0, 10, 1, 9, 10, 9]);
});

test("question", () => {
  expect(a.question).toEqual([1, 9, 3, 10, 2]);
  expect(b.question).toEqual([1, 6, 0, 10, 1]);
});

test("ans", () => {
  expect(a.ans).toEqual([3, 5, 1]);
  expect(b.ans).toEqual([9, 10, 9]);
});
