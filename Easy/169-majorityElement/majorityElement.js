function majorityElement(nums) {
  let lenOfNums = nums.length;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] > Math.floor(lenOfNums / 2)) {
      return key;
    }
  }
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
