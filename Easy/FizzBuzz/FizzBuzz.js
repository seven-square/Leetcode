// for (let n = 1; n <= 100; n++) {
//   if (n % 3 == 0 && n % 5 == 0) console.log("FizzBuzz");
//   //break;
//   else if (n % 5 == 0) console.log("Buzz");
//   //break;
//   else if (n % 3 == 0) console.log("Fizz");
//   //break;
//   else console.log(`${n} is neither a multiple of 3 nor 5`);
// }

// console.log(fizzBuzz(6));

function fizzBuzz(n) {
  let arr = [];
  // let m = n;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) arr.push("FizzBuzz");
    //break;
    else if (i % 5 == 0) arr.push("Buzz");
    //break;
    else if (i % 3 == 0) arr.push("Fizz");
    //break;
    else arr.push(i.toString());
  }
  return arr;
}
console.log(fizzBuzz(6));
console.log(fizzBuzz(5));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
