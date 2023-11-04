// __test__/tangenTest.js
/* eslint-disable no-alert, no-console, no-undef */

import { User } from "../src/models/user";
import { createMock } from "./testBase";

describe("constractor Test", () => {
  let a, b;

  beforeEach(() => {
    a = new User(["1", "5323", "関口"]);
    b = new User(["2", "5342", "若杉"]);
  });

  test("gakuseiName", () => {
    expect(a.gakuseiName).toBe("関口");
    expect(b.gakuseiName).toBe("若杉");
  });

  test("gakuseiNum", () => {
    expect(a.gakuseiNum).toBe(5323);
    expect(b.gakuseiNum).toBe(5342);
  });
});

describe("gasTest", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("findByNum", async () => {
    createMock("findOne", [
      "1",
      "5301",
      "青山",
      "6315b77e328ac53df46f93c5c89216d93756a6a3df3c27b8cc1b2ea64898cef5"
    ]);
    let user = await User.findByNum(5301, "sekigaku85");
    expect(user.gakuseiName).toBe("青山");
    expect(user.gakuseiNum).toBe(5301);

    let user2 = await User.findByNum(5301, "wakawaka");
    expect(user2).toBeNull();
  });
});
