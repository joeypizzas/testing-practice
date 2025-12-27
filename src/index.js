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

export function caesarCipher(str, shift) {
  if (typeof str != "string" || !str || typeof shift != "number" || !shift)
    return "Please only include letters and a valid shift.";

  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const arrayOfStr = str.split("");
  const shiftedArr = [];

  for (const char of arrayOfStr) {
    if (alphabet.includes(char.toLowerCase())) {
      let shiftedIndex;
      if (alphabet.indexOf(char.toLowerCase()) + shift > 25) {
        shiftedIndex = alphabet.indexOf(char.toLowerCase()) + shift - 26;
      } else {
        shiftedIndex = alphabet.indexOf(char.toLowerCase()) + shift;
      }
      if (char === char.toUpperCase()) {
        shiftedArr.push(alphabet[shiftedIndex].toUpperCase());
      } else {
        shiftedArr.push(alphabet[shiftedIndex]);
      }
    } else {
      shiftedArr.push(char);
    }
  }

  return shiftedArr.join("");
}

export function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0)
    return "Please pass an array with only numbers.";

  for (const num of arr) {
    if (typeof num != "number")
      return "Please pass an array with only numbers.";
  }

  return {
    average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
