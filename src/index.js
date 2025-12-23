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
