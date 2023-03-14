function howManyRotations2(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      return `the array is rotated ${i + 1} times`;
    }
  }
  return "the array is rotated 0 times";
}
console.log(howManyRotations2([8, 9, 10, 2, 5, 6]));
console.log(howManyRotations2([2, 5, 6, 8, 9, 10]));
console.log(howManyRotations2([8, 9, 10, 11, 2, 5]));
console.log(howManyRotations2([8, 9, 10, 11, 2, 5, 6]));
console.log(howManyRotations2([23, 34, 45, 12, 17, 19]));

// function howManyRotations(nums) {
//   let low = 0;
//   let high = nums.length - 1;
//   while (low < high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] > nums[mid + 1]) {
//       return `the array is rotated ${mid + 1} times`;
//     } else {
//       low = mid;
//     }
//     if (low <= high && nums[high] > nums[high - 1]) {
//       break;
//     }
//   }
//   return "the array is rotated 0 times";
// }
// console.log(howManyRotations([8, 9, 10, 2, 5, 6]));
// console.log(howManyRotations([2, 5, 6, 8, 9, 10]));
// console.log(howManyRotations([8, 9, 10, 11, 2, 5]));
// console.log(howManyRotations([8, 9, 10, 11, 2, 5, 6]));
// console.log(howManyRotations([23, 34, 45, 12, 17, 19]));

//let nums = [8, 9, 10, 2, 5, 6];
//console.log(typeof nums[6] == undefined);
