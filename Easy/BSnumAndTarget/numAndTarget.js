//using a while loop
function binarySearchWL(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    if (target == nums[mid]) {
      return `element found at inxex ${mid}`;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "element not found";
}

// console.log(binarySearchWL([2, 3, 5, 7, 9], 7));
// console.log(binarySearchWL([1, 4, 5, 8, 9], 2));

//with recursion
let nums = [1, 4, 5, 8, 9];
let low = 0;
let high = nums.length - 1;
function binarySearchRecursion(target, low, high) {
  if (low <= high) {
    let guess = Math.round((low + high) / 2);
    if (target == nums[guess]) {
      return `element found at inxex ${guess}`;
    } else if (target > nums[guess]) {
      low = guess + 1;
      return binarySearchRecursion(target, low, high);
    } else {
      high = guess - 1;
      return binarySearchRecursion(target, low, high);
    }
  }
  return "element not found";
}

console.log(binarySearchRecursion(2, low, high));
//console.log(binarySearchRecursion(2));
