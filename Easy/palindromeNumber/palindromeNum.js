// function isPalindrome5N(x) {
//   if (x < 0) {
//     return false;
//   }
//   reversedX = parseInt(x.toString().split("").reverse().join(""));
//   //reversedX = Number(x);
//   console.log(reversedX);
//   if (reversedX == x) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.time("5N");
// console.log(isPalindrome5N(12345654321));
// console.timeEnd("5N");

let revHalf = 0;
let lastDig = 0;
function isPalindromeN(x) {
  if (x < 0 || x) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  if (x % 10 == 0) {
    return false;
  }
  while (x > revHalf) {
    revHalf = revHalf * 10;
    lastDig = x % 10;
    x = Math.floor(x / 10);

    revHalf += lastDig;
  }
  return x == Math.floor(revHalf / 10) || x == revHalf;
}

//console.time("N");
console.log(isPalindromeN(0));
console.log(revHalf);
//console.timeEnd("N");
