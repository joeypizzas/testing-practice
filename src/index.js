// Testing practice index

export function capitalize(string) {
  if (!string || string.length === 0) return "";
  if (typeof string === "number") return string;
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  if (!string) return null;
  if (typeof string === "number") return string;
  const arr = string.split("");
  const reversedArr = arr.reverse();
  const reversedString = reversedArr.join("");
  return reversedString;
}

export const calculator = {
  add(a, b) {
    if (typeof a != "number" || typeof b != "number")
      return "Please add two numbers.";
    return a + b;
  },
  subtract(a, b) {
    if (typeof a != "number" || typeof b != "number")
      return "Please subtract two numbers.";
    return a - b;
  },
  multiply(a, b) {
    if (typeof a != "number" || typeof b != "number")
      return "Please multiply two numbers.";
    return a * b;
  },
  divide(a, b) {
    if (typeof a != "number" || typeof b != "number")
      return "Please divide two numbers.";
    if (b === 0) return "Please do not divide by 0";
    return a / b;
  },
};
