// __test__/test.js
/* eslint-disable no-alert, no-console, no-undef */
import { add } from "../src/models/r_add";
test("add 1 + 2", () => {
  expect(add(1, 3)).toBe(4);
});
