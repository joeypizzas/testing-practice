// Testing practice test suite

import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

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

describe("calculator methods", () => {
  test("adds two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("add two string numbers", () => {
    expect(calculator.add("1", "2")).toBe("Please add two numbers.");
  });

  test("one or more addition param is not a number", () => {
    expect(calculator.add(null, 2)).toBe("Please add two numbers.");
  });

  test("subtract two numbers", () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });

  test("subtract two string numbers", () => {
    expect(calculator.subtract("3", "2")).toBe("Please subtract two numbers.");
  });

  test("one or more subtraction param is not a number", () => {
    expect(calculator.subtract(null, 2)).toBe("Please subtract two numbers.");
  });

  test("multiply two numbers", () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });

  test("mutiply two string numbers", () => {
    expect(calculator.multiply("3", "2")).toBe("Please multiply two numbers.");
  });

  test("one or more multiplication param is not a number", () => {
    expect(calculator.multiply(null, 2)).toBe("Please multiply two numbers.");
  });

  test("divide two numbers", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test("divide two string numbers", () => {
    expect(calculator.divide("4", "2")).toBe("Please divide two numbers.");
  });

  test("one or more division param is not a number", () => {
    expect(calculator.divide(null, 2)).toBe("Please divide two numbers.");
  });

  test("divide by 0", () => {
    expect(calculator.divide(5, 0)).toBe("Please do not divide by 0");
  });
});

describe("caesar cipher function", () => {
  test("shift simple string", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
  });

  test("non-string param", () => {
    expect(caesarCipher(5, 3)).toBe(
      "Please only include letters and a valid shift.",
    );
  });

  test("empty string", () => {
    expect(caesarCipher("", 3)).toBe(
      "Please only include letters and a valid shift.",
    );
  });

  test("non-number shift", () => {
    expect(caesarCipher("abc", "d")).toBe(
      "Please only include letters and a valid shift.",
    );
  });

  test("falsy shift", () => {
    expect(caesarCipher("abc", null)).toBe(
      "Please only include letters and a valid shift.",
    );
  });

  test("wrap alphabet", () => {
    expect(caesarCipher("pizza", 2)).toBe("rkbbc");
  });

  test("case preservation", () => {
    expect(caesarCipher("heLLo", 3)).toBe("khOOr");
  });

  test("punctuation and spacing", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("Analyze array function", () => {
  test("Array has non-number", () => {
    expect(analyzeArray([1, 2, "hello!", 4, 5])).toBe(
      "Please pass an array with only numbers.",
    );
  });

  test("No array", () => {
    expect(analyzeArray(null)).toBe("Please pass an array with only numbers.");
  });

  test("Empty array", () => {
    expect(analyzeArray([])).toBe("Please pass an array with only numbers.");
  });

  test("Return analyzed array object", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
      average: 5.5,
      min: 1,
      max: 10,
      length: 10,
    });
  });

  test("Negative numbers", () => {
    expect(analyzeArray([-10, -5, 0, 5, 10])).toStrictEqual({
      average: 0,
      min: -10,
      max: 10,
      length: 5,
    });
  });
});
