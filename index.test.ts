import { expect, jest, test, describe } from "@jest/globals";
import { removeOddsFromArray } from "./app";
describe("#removeOddsFromArray", () => {
  describe("no odd numbers", () => {
    test("returns the array as it is", () => {
      const numArrayNoOdds = removeOddsFromArray([2, 4, 6, 8]);
      expect(numArrayNoOdds.length).toBe(4);
      expect(numArrayNoOdds[0]).toBe(2);
    });
  });
  describe("all odd numbers", () => {
    test("returns an empty array", () => {
      const numArrayNoOdds = removeOddsFromArray([1, 3, 5, 7]);
      if (!numArrayNoOdds) {
        console.log("the array is empty");
      } else {
        expect(numArrayNoOdds.length).toBe(0);
      }
    });
  });
  describe("empty array", () => {
    test("returns an empty array", () => {
      const numArrayNoOdds = removeOddsFromArray([]);
      expect(numArrayNoOdds.length).toBe(0);
    });
  });
  describe("half of array odds", () => {
    test("returns only the even numbers", () => {
      const numArray = [1, 2, 3, 4, 5, 6, 7];
      const numArrayNoOdds = removeOddsFromArray(numArray);
      expect(numArrayNoOdds.length).toBe(3);
      expect(numArrayNoOdds[0]).toBe(2);
    });
  });
});
