// [-1, 0, 1, 2, -1, -4]

function threeSum(nums) {
  // you can actually just have initialArr = [nums[0]]
  let initialArr;
  let sum = 0;
  let tempArr = [];
  let output = [];

  // loop through nums array to work on current num
  for (let i = 1; i < nums.length; i++) {
    initialArr = [];
    initialArr.push(nums[0]);
    initialArr.push(nums[i]);
    // loop through nums array to compare current num to other nums that aren't the first one
    for (let j = 1; j < nums.length; j++) {
      if (j !== i) {
        if (initialArr.length < 3) {
          initialArr.push(nums[j]);
          for (let k = 0; k < initialArr.length; k++) {
            sum += initialArr[k];
          }
          if (sum == 0) {
            // for (a = 0; a < output.length; a++) {
            output.push(initialArr);
            // output.forEach((a) => {
            //   if (
            //     JSON.stringify(a.sort()) == JSON.stringify(initialArr.sort())
            //   ) {
            //     tempArr.push(initialArr);
            //   }
            // });
            // // }
            // // if there's no array like initialArray in the output array, there'd be nothing in temporary array, diaforee, you can push initialArray in
            // if (tempArr.length == 0) {
            //   output.push(initialArr);
            // } else {
            //   tempArr = [];
            // }
            initialArr = [];
            initialArr.push(nums[0]);
            initialArr.push(nums[i]);
            // }
          } else {
            sum = 0;
            initialArr = [];
            initialArr.push(nums[0]);
            initialArr.push(nums[i]);
          }
        }
      }
      // initialArr = [];
      // initialArr.push(nums[0]);
      // initialArr.push(nums[i]);
      //  else {
      //   initialArr.push("hmm");
      // }
    }
  }
  return output;
}
// let array = [
//   [-1, 0, 1],
//   [-1, 2, -1],
//   [0, 1, 2],
//   [0, 2, 1],
// ];
// let arr = [0, 1, 2];
// array.forEach((a) => {
//   if (JSON.stringify(a) == JSON.stringify(arr)) {
//     console.log(a);
//   }
// });

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([3, 0, -2, -1, 1, 2]));
