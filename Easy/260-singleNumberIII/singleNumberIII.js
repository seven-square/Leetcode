function singleNumber(nums) {
  let obj = {};
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] == 1) {
      newArr.push(parseInt(key));
    }
  }
  return newArr;
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));
console.log(singleNumber([0, 1]));
