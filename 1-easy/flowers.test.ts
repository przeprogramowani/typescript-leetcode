import {describe, it, expect} from "vitest";
import {canPlaceFlowers} from "./flowers";

describe("canPlaceFlowers", () => {
  it("should return true when n flowers can be planted - case 1", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  it("should return false when n flowers cannot be planted - case 2", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });

  it("should handle empty flowerbed", () => {
    expect(canPlaceFlowers([], 0)).toBe(true);
  });

  it("should handle flowerbed with all zeros", () => {
    expect(canPlaceFlowers([0, 0, 0, 0], 2)).toBe(true);
  });

  it("should handle flowerbed with all ones", () => {
    expect(canPlaceFlowers([1, 1, 1], 1)).toBe(false);
  });
});
