function mergeSortedArray(nums1, m, nums2, n) {
  let newArr = [];
  let len = m + n;
  if (len == 0) {
    nums1 = [];
  }
  for (let i = 0; i < len; ) {
    if (nums1[0] !== 0 || (nums1[0] == 0 && nums1.length > n)) {
      if (nums1[0] < nums2[0]) {
        newArr.push(nums1.shift());
        i++;
      } else if (nums1[0] == nums2[0]) {
        newArr.push(nums1.shift());
        i++;
        newArr.push(nums2.shift());
        i++;
      } else if (nums2[0] < nums1[0]) {
        newArr.push(nums2.shift());
        i++;
      } else if (nums2.length == 0) {
        newArr.push(nums1.shift());
        i++;
      }
    } else {
      newArr.push(nums2.shift());
      i++;
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    nums1[j] = newArr[j];
  }
  return nums1;
  //     //you can aslo swap it this way
  //     // let temp = nums1[i + 1];
  //     // nums1[i + 1] = nums1[i];
  //     // nums1[i] = temp;
  //     //[nums1[i + 1], nums1[i]] = [nums1[i], nums1[i + 1]];
  //    let min =  Math.min(nums1)
  //    if
  //   }
  // }
  // return nums1;
}
console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 3, 5], 3));
console.log(mergeSortedArray([1], 1, [], 0));
console.log(mergeSortedArray([0], 0, [1], 1));
console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeSortedArray([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(mergeSortedArray([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
