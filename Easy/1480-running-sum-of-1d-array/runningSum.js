function runningSum(nums) {
  let totalSum = [];
  for (i = 0; i < nums.length; i++) {
    if (i == 0) {
      totalSum.push(nums[i]);
    } else {
      let temp = 0;
      for (j = 0; j <= i; j++) {
        temp += nums[j];
      }
      totalSum.push(temp);
    }
  }
  return totalSum;
}

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
