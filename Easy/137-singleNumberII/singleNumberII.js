function singleNumber(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] == 1) {
      return key;
    }
  }
}

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
