// __test__/tangenTest.js
/* eslint-disable no-alert, no-console, no-undef */
import { Tangen } from "../src/models/tangen";
import { createMock } from "./testBase";

describe("constractor Test", () => {
  let a, b, c;
  beforeEach(() => {
    a = new Tangen([1, "hoge", 3]);
    b = new Tangen([2, "gaku", 4]);
    c = new Tangen([3, "sugi", 8]);
  });

  test("tangenName", () => {
    expect(a.name).toBe("hoge");
    expect(b.name).toBe("gaku");
    expect(c.name).toBe("sugi");
  });

  test("tangenLevel", () => {
    expect(a.level).toBe(3);
    expect(b.level).toBe(4);
    expect(c.level).toBe(8);
  });
});

describe("gas test", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Tangen.find", async () => {
    createMock("findOne", [1, "直列合成抵抗", 1]);
    let t = await Tangen.find(1);
    expect(t.name).toBe("直列合成抵抗");
    expect(t.level).toBe(1);
    expect(t.id).toBe(1);
  });

  test("circuits", async () => {
    createMock("findOne", [2, "並列合成抵抗", 1]);
    let t = await Tangen.find(2);
    createMock("findMany", [
      [4, 2, "並列合成抵抗1", 1, "kairo4.png", 4, 4, 3],
      [5, 2, "並列合成抵抗2", 2, "kairo5.png", 3, 5, 3],
      [6, 2, "並列合成抵抗3", 3, "kairo6.png", 2, 6, 4]
    ]);
    let circuits = await t.circuits();
    expect(circuits.length).toBe(3);
    expect(circuits[0].name).toBe("並列合成抵抗1");
  });
});
