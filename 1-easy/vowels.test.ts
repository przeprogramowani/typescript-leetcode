import {describe, it, expect} from "vitest";
import {reverseVowels} from "./vowels";

describe("reverseVowels", () => {
  it("should reverse vowels in a string - case 1", () => {
    expect(reverseVowels("IceCreAm")).toBe("AceCreIm");
  });

  it("should reverse vowels in a string - case 2", () => {
    expect(reverseVowels("leetcode")).toBe("leotcede");
  });

  it("should handle strings with no vowels", () => {
    expect(reverseVowels("xyz")).toBe("xyz");
  });

  it("should handle strings with all vowels", () => {
    expect(reverseVowels("aeiou")).toBe("uoiea");
  });

  it("should handle uppercase and lowercase vowels", () => {
    expect(reverseVowels("aA")).toBe("Aa");
  });
});
