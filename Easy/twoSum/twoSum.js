let arr1 = [...Array(1000000)].map(() => Math.floor(Math.random() * 40));
let set = new Set(arr1);
let arr = [...set];
console.log(arr);
//Constant time complexity - O(n)
function twoSumCT(nums, target) {
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
console.time("twoSumCT");
console.log(twoSumCT(arr, 20));
console.timeEnd("twoSumCT");

//Linear Time - O(n**2)
function twoSumN2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == otherNum) {
        return [i, j];
      }
    }
  }
  return `no two pairs of index sums up to the target num`;
}
console.time("twoSumN2");
console.log(twoSumN2(arr, 20));
console.timeEnd("twoSumN2");

//linear Time complexity - O(n**3)
function twoSumN3(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    if (nums.includes(otherNum)) {
      if (nums.indexOf(otherNum) !== i) {
        return [i, nums.indexOf(otherNum)];
      }
    }
  }
  return `no two pairs of index sums up to the target num`;
}
console.time("twoSumN3");
console.log(twoSumN3(arr, 20));
console.timeEnd("twoSumN3");

console.log(arr);
