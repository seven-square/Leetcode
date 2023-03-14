function majorityElement(nums) {
  let obj = {};
  let newArr = [];
  let lenOfNum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] > Math.floor(lenOfNum / 3)) {
      newArr.push(parseInt(key));
    }
  }
  return newArr;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 2]));
