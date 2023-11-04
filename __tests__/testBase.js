// __test__/tangenTest.js
/* eslint-disable no-alert, no-console, no-undef */
import { Base } from "../src/models/base";

export function createMock(method, array) {
  const mock = jest.spyOn(Base, method);
  mock.mockReturnValue(
    new Promise(function(resolve) {
      resolve(array);
    })
  );
  return mock;
}

test("", () => {});
