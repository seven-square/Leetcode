function containsDuplicate2(nums) {
  let set = new Set(nums);
  if (set.size < nums.length) {
    return true;
  } else {
    return false;
  }
}

console.log(containsDuplicate2([1, 2, 3, 4]));
console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

function containsDuplicate1(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
}
