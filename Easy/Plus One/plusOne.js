function plusOne(s) {
  let lastIndex = s.length - 1;
  let lastItemPlusOne = s[lastIndex] + 1;
  let newValue = lastItemPlusOne.toString();
  let i = 0;
  while (i < newValue.length) {
    s[lastIndex + i] = parseInt(newValue[i]);
    i++;
  }
  return s;
}

// function plusOne(digits) {
//   let workingDigits = digits.map((i) => i.toString());
//   console.log(workingDigits);
//   let joinedDigits = parseInt(workingDigits.join(""));
//   console.log(joinedDigits);
//   let digitsPlusOne;
//   let splitDigits = joinedDigits.toString().split("");
//   let finalDigits = splitDigits.map((i) => parseInt(i));
//   return finalDigits;
// }

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9, 9]));
// let s = [1, 2, 9];
// let lastIndex = s.length - 1;
// let i = 0;
// let lastItemPlusOne = s[lastIndex] + 1;
// let newValue = lastItemPlusOne.toString();
// while (i < newValue.length) {
//   s[lastIndex + i] = parseInt(newValue[i]);
//   console.log(s);
//   i++;
// }
