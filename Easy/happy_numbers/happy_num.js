// function detHappyNum(num1) {
//   let sum = 0;
//   let num2 = num1;
//   while (sum !== 1 && sum !== num1) {
//     let num3 = num2.toString().split("");
//     // console.log("before for loop- num2:", num2, "num3:", num3, typeof num3);
//     sum = 0;
//     for (i = 0; i < num3.length; i++) {
//       //sum = 0;
//       sum += parseInt(num3[i]) * parseInt(num3[i]);
//       //   console.log(
//       //     "inside for loop- num2:",
//       //     num2,
//       //     "num3:",
//       //     num3,
//       //     typeof num3,
//       //     "sum:",
//       //     sum,
//       //     typeof sum
//       //   );
//     }
//     num2 = sum;
//     // console.log(
//     //   "outside for loop- num2:",
//     //   num2,
//     //   "num3:",
//     //   num3,
//     //   typeof num3,
//     //   "sum:",
//     //   sum,
//     //   typeof sum
//     // );
//   }
//   if (sum == 1) {
//     return "Happy number";
//   } else if (sum == num1) {
//     return "Unhappy number";
//   }
// }

// console.log(detHappyNum(9));

function detHappyNum(num1) {
  set = new Set();
  let sum = 0;
  let num2 = num1;
  while (sum !== 1 && sum !== num1) {
    let num3 = num2
      .toString()
      .split("")
      .map((i) => i * i);
    sum = 0;
    for (let i = 0; i < num3.length; i++) {
      sum += num3[i];
    }
    num2 = sum;
    //set = Set();
    if (sum == 1) {
      return true;
    } else if (set.has(sum)) {
      //first thing is to check if the sum is present in the set
      return false;
    } else {
      set.add(sum); //otherwise, drop it like it's hot
    }
  }
}

//console.log(detHappyNum(49));

// let i = "9";
// let j = "2";
// console.log(j * i);
//
let arr = [];
let i = 0;
// let isHappy = detHappyNum(i);
// console.log(isHappy);
//i++;
while (arr.length <= 5) {
  let isHappy = detHappyNum(i);
  console.log(isHappy);
  if (isHappy) {
    arr.push(i);
  }
  console.log(arr);
  i += 1;
  console.log(i);
}
//console.log(arr);
//i++
//console.log(arr.slice(0, 5));
