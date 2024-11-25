import {describe, it, expect} from "vitest";
import {increasingTriplet} from "./triplets.solution";

describe("increasingTriplet", () => {
  it("should return true for array with increasing triplet - case 1", () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
  });

  it("should return false for array without increasing triplet - case 2", () => {
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
  });

  it("should return true for array with non-consecutive increasing triplet", () => {
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
  });

  it("should handle array with duplicate numbers", () => {
    expect(increasingTriplet([1, 1, 1, 1])).toBe(false);
  });

  it("should handle minimum array length", () => {
    expect(increasingTriplet([1, 2])).toBe(false);
  });
});
