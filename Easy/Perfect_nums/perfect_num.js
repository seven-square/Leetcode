// function isNumPerfect(num) {
//   let arr = [];
//   let i = 1;
//   while (i < num + 1) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//     i++;
//   }
//   //console.log(arr);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   if (sum / 2 == num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isNumPerfect(28));

function isNumPerfect(num) {
  let arr = [];
  let i = 1;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  //console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      sum2 += arr[i];
    }
  }
  //console.log(sum2);
  if (sum / 2 == num && sum2 == num) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumPerfect(6));
