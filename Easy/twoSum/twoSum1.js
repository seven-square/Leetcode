function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    if (otherNum in obj) {
      return [i, obj[otherNum]];
    }
    obj[nums[i]] = i;
  }
  console.log(obj);
  return `no two pairs of index sums up to the target num`;
}
