function reduceToZero(num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 == 0) {
      // console.log(num);
      num /= 2;
      count++;
    } else {
      num--;
      count++;
    }
  }
  return count;
}

console.log(reduceToZero(14));
console.log(reduceToZero(8));
console.log(reduceToZero(123));
console.log(reduceToZero(0));

// console.log(14 / 2);
