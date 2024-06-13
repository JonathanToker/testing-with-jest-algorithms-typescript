import { expect, jest, test, describe } from "@jest/globals";
import {
  removeOddsFromArray,
  arrayPlusIndexValues,
  findMaxAverage,
} from "./app";
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

describe("#arrayPlusIndexValues", () => {
  describe("zero elements", () => {
    test("returns an empty array", () => {
      expect(arrayPlusIndexValues([])).toStrictEqual([]);
    });
  });

  describe("1 element", () => {
    test("returns the array as it is", () => {
      const arrWithOneItem = arrayPlusIndexValues([1]);
      expect(arrWithOneItem).toStrictEqual([1]);
      expect(arrWithOneItem.length).toBe(1);
    });
  });

  describe("with a few elements", () => {
    test("return the array plus index values", () => {
      const arr = [1, 2, 3, 4, 5];
      //output should be [1, 3, 5, 7, 9]
      const plusIndexValues = arrayPlusIndexValues(arr);
      expect(plusIndexValues).toStrictEqual([1, 3, 5, 7, 9]);
      expect(plusIndexValues.length).toBe(5);
      expect(plusIndexValues[0]).toBe(arr[0]);
    });
  });
});

describe("#findMaxAverage", () => {
  describe("In the middle", () => {
    test("Maximum average is 12.75", () => {
      const firstTest = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
      expect(firstTest).toBe(12.75);
    });
  });
});
