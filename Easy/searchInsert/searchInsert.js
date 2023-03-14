function overall(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  function searchInsert(target, low, high) {
    if (low <= high) {
      let mid = Math.round((low + high) / 2);
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] > target) {
        high = mid - 1;
        searchInsert(target, low, high);
      } else {
        low = mid + 1;
        searchInsert(target, low, high);
      }
    }
  }
  function figurePossibleIndex(target, low, high) {
    while (low <= high) {
      let mid = Math.round((low + high) / 2);
      if (target > nums[high]) {
        return nums.length;
      }
      if (target < nums[low]) {
        return 0;
      } else {
        if (nums[mid] > target && nums[mid - 1] < target) {
          return mid;
        } else if (nums[mid] > target && nums[mid - 1] > target) {
          high = mid - 1;
        } else if (nums[mid] < target && nums[mid + 1] < 7) {
          low = mid + 1;
        }
      }
    }
  }
  let result = searchInsert(target, low, high);
  if (result == undefined) {
    return figurePossibleIndex(target, low, high);
  } else {
    return searchInsert(target, low, high);
  }
}

console.log(overall([1, 3, 5, 6], 5));
console.log(overall([1, 3, 5, 6], 0));

// function overall(nums, target) {
//   let low = 0;
//   let high = nums.length - 1;

//   function searchInsert(target, low, high) {
//     if (low <= high) {
//       let mid = Math.round((low + high) / 2);
//       if (nums[mid] == target) {
//         return mid;
//       } else if (nums[mid] > target) {
//         high = mid - 1;
//         searchInsert(target, low, high);
//       } else {
//         low = mid + 1;
//         searchInsert(target, low, high);
//       }
//     }
//   }
//   function figurePossibleIndex(target, low, high) {
//     while (low <= high) {
//       let mid = Math.round((low + high) / 2);
//       if (target > nums[high]) {
//         return nums.length;
//       }
//       if (target < nums[low]) {
//         return 0;
//       } else {
//         if (nums[mid] > target && nums[mid - 1] < target) {
//           return mid;
//         } else if (nums[mid] > target && nums[mid - 1] > target) {
//           high = mid - 1;
//         } else if (nums[mid] < target && nums[mid + 1] < 7) {
//           low = mid + 1;
//         }
//       }
//     }
//   }
//   let result = searchInsert(target, low, high);
//   if (result == undefined) {
//     return figurePossibleIndex(target, low, high);
//   } else {
//     return searchInsert(target, low, high);
//   }
// }

// console.log(overall([1, 3, 5, 6], 5));
// console.log(overall([1, 3, 5, 6], 0));
