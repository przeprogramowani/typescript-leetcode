import {describe, it, expect} from "vitest";
import {findSubstring} from "./substring";

describe("findSubstring", () => {
  it("should find concatenated substrings - case 1", () => {
    expect(findSubstring("barfoothefoobarman", ["foo", "bar"])).toEqual(
      expect.arrayContaining([0, 9])
    );
  });

  it("should return empty array when no concatenated substrings exist", () => {
    expect(
      findSubstring("wordgoodgoodgoodbestword", [
        "word",
        "good",
        "best",
        "word",
      ])
    ).toEqual([]);
  });

  it("should find multiple concatenated substrings", () => {
    expect(
      findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])
    ).toEqual(expect.arrayContaining([6, 9, 12]));
  });

  it("should handle single character words", () => {
    expect(findSubstring("aaa", ["a", "a"])).toEqual(
      expect.arrayContaining([0, 1])
    );
  });
});
