function sqrt(x) {
  let root = 0;
  let oddNum = 3;
  while (x >= 1) {
    x -= oddNum;
    oddNum += 2;
    root++;
  }
  return root;
}

console.log(sqrt(1));
console.log(sqrt(2));
console.log(sqrt(3));
console.log(sqrt(4));
console.log(sqrt(5));
console.log(sqrt(6));
console.log(sqrt(7));
console.log(sqrt(8));
console.log(sqrt(9));
console.log(sqrt(10));
console.log(sqrt(25));
console.log(sqrt(36));
