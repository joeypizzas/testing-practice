// Testing practice test suite

import { capitalize, reverseString } from "./index.js";

describe("capitalize function", () => {
  test("returns first character of string capitalized", () => {
    expect(capitalize("pizza")).toBe("Pizza");
  });

  test("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("handle falsy param", () => {
    expect(capitalize(null)).toBe("");
  });

  test("handle number in string", () => {
    expect(capitalize("5")).toBe("5");
  });

  test("handle number param", () => {
    expect(capitalize(5)).toBe(5);
  });
});

describe("reverse string function", () => {
  test("returns string parameter reversed", () => {
    expect(reverseString("Pizza")).toBe("azziP");
  });

  test("handles empty string", () => {
    expect(reverseString("")).toBe(null);
  });

  test("handle falsy param", () => {
    expect(reverseString(null)).toBe(null);
  });

  test("handle number in string", () => {
    expect(reverseString("5")).toBe("5");
  });

  test("handle number param", () => {
    expect(reverseString(5)).toBe(5);
  });

  test("string with a space", () => {
    expect(reverseString("pizza pizza")).toBe("azzip azzip");
  });
});
