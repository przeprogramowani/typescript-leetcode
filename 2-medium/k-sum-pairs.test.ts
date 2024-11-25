import {describe, it, expect} from "vitest";
import {maxOperations} from "./k-sum-pairs";

describe("maxOperations", () => {
  it("should return correct number of operations - case 1", () => {
    expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
  });

  it("should return correct number of operations - case 2", () => {
    expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
  });

  it("should handle array with no valid pairs", () => {
    expect(maxOperations([1, 2, 3, 4], 10)).toBe(0);
  });

  it("should handle array with duplicate numbers", () => {
    expect(maxOperations([2, 2, 2, 2], 4)).toBe(2);
  });

  it("should handle array with single element", () => {
    expect(maxOperations([1], 2)).toBe(0);
  });
});
