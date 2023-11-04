// __test__/tangenTest.js
/* eslint-disable no-alert, no-console, no-undef */

import { Circuit } from "../src/models/circuit";
import { createMock } from "./testBase";

describe("constractor Test", () => {
  let a, b;

  beforeEach(() => {
    a = new Circuit([1, 1, "直列合成抵抗1", 3, "1.png", 5, 5, 3]);
    b = new Circuit([2, 4, "直列合成抵抗2", 2, "2.png", 6, 2, 3]);
  });

  test("circuitName", () => {
    expect(a.name).toBe("直列合成抵抗1");
    expect(b.name).toBe("直列合成抵抗2");
  });

  test("circuitTangenId", () => {
    expect(a.tangen_id).toBe(1);
    expect(b.tangen_id).toBe(4);
  });

  test("circuitLevel", () => {
    expect(a.level).toBe(3);
    expect(b.level).toBe(2);
  });

  test("circuitPic", () => {
    expect(a.pic).toBe("1.png");
    expect(b.pic).toBe("2.png");
  });

  test("circuitFinNum", () => {
    expect(a.fin_num).toBe(5);
    expect(b.fin_num).toBe(6);
  });

  test("circuitQestionNum", () => {
    expect(a.question_num).toBe(5);
    expect(b.question_num).toBe(2);
  });

  test("circuitAnsNum", () => {
    expect(a.ans_num).toBe(3);
    expect(b.ans_num).toBe(3);
  });

  test("question_sub", () => {
    let array = [
      [1, 1, 1, 9, 3, 10, 2, 3, 5, 1],
      [2, 1, 1, 6, 0, 10, 1, 9, 10, 9]
    ];
    let questions = a.question_sub(array);
    expect(questions[0].question).toEqual([1, 9, 3, 10, 2]);
    expect(questions[1].question).toEqual([1, 6, 0, 10, 1]);
  });
});

describe("gastest", () => {
  let a;

  beforeEach(() => {
    a = new Circuit([1, 1, "直列合成抵抗1", 3, "1.png", 5, 5, 3]);
  });

  test("findQuestions", async () => {
    createMock("findMany", [
      [1, 1, 9, 6, 4, 6, 5, 9, 1, 7],
      [2, 1, 7, 8, 3, 1, 10, 6, 2, 6],
      [3, 1, 0, 2, 9, 1, 3, 8, 4, 1]
    ]);
    let questions = await a.findQuestions();
    expect(questions[0].question).toEqual([9, 6, 4, 6, 5]);
    expect(questions[1].question).toEqual([7, 8, 3, 1, 10]);
    expect(questions[2].question).toEqual([0, 2, 9, 1, 3]);
    expect(questions[0].ans).toEqual([9, 1, 7]);
    expect(questions[1].array).toEqual([2, 1, 7, 8, 3, 1, 10, 6, 2, 6]);
  });
});
