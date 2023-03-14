function LCP(strs) {
  strs = ["Drive", "Driver", "Driving", "Drove"];
//strs = strs.sort((a, b) => a.length - b.length);

function findMinLength(strs) {
  strs = strs.sort((a, b) => a.length - b.length);
  return strs[0].length;
}

function allContainsPrefix(strs, str, start, end) {
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    for (let j = start; j <= end; j++) {
      if (word[j] != str[j]) {
        return false;
      }
    }
  }
  return true;
}

let low = 0;
// let strs = strs.sort((a, b) => a.length - b.length);
let index = findMinLength(strs);
let high = index - 1;
let lcp = "";
function longestCommonPrefix2(strs, low, high) {
  if (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (allContainsPrefix(strs, strs[0], low, mid)) {
      lcp += strs[0].slice(low, mid + 1);
      low = mid + 1;
      return longestCommonPrefix2(strs, low, high);
    } else {
      high = mid - 1;
      return longestCommonPrefix2(strs, low, high);
    }
  }
  return lcp;
}
}
console.log(LCP(["Drive", "Driver", "Driving", "Drove"], low, high));
// console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix2(["dog", "race", "car"]));
// console.log(longestCommonPrefix2(["success", "surprise", "support"]));

/*
USING A WHILE LOOP
function LCP(strs) {
function allContainsPrefix(strs, str, start, end) {
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    for (let j = start; j <= end; j++) {
      if (word[j] != str[j]) {
        return false;
      }
    }
  }
  return true;
}

function longestCommonPrefix2(strs) {
  let low = 0;
  strs = strs.sort((a, b) => a.length - b.length);
  let index = strs[0].length;
  let high = index - 1;
  let lcp = "";
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (allContainsPrefix(strs, strs[0], low, mid)) {
      lcp += strs[0].slice(low, mid + 1);
      low = mid + 1;
      //return longestCommonPrefix2(strs, low, high);
    } else {
      high = mid - 1;
      //return longestCommonPrefix2(strs, low, high);
    }
  }
  return lcp;
}
return longestCommonPrefix2(strs);
}
console.log(LCP(["Drive", "Driver", "Driving", "Drove"]));
console.log(LCP(["flower", "flow", "flight"]));
console.log(LCP(["dog", "race", "car"]));
console.log(LCP(["success", "surprise", "support"]));
*/
// let strs;
// // let low = 0;
// // strs = strs.sort((a, b) => a.length - b.length);
// // let index = strs[0].length;
// // let high = index - 1;

// function allContainsPrefix(strs, str, start, end) {
//   for (let i = 0; i < strs.length; i++) {
//     let word = strs[i];
//     for (let j = start; j <= end; j++) {
//       if (word[j] != str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function longestCommonPrefix2(strs) {
//   let low = 0;
//   strs = strs.sort((a, b) => a.length - b.length);
//   let index = strs[0].length;
//   let high = index - 1;
//   let lcp = "";
//   while (low <= high) {
//     let mid = Math.floor((high + low) / 2);
//     if (allContainsPrefix(strs, strs[0], low, mid)) {
//       lcp += strs[0].slice(low, mid + 1);
//       low = mid + 1;
//       //return longestCommonPrefix2(strs, low, high);
//     } else {
//       high = mid - 1;
//       //return longestCommonPrefix2(strs, low, high);
//     }
//   }
//   return lcp;
// }

// console.log(longestCommonPrefix2(["Drive", "Driver", "Driving", "Drove"]));
// console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix2(["dog", "race", "car"]));
// console.log(longestCommonPrefix2(["success", "surprise", "support"]));

// //console.log(Math.floor((0 + 3) / 2));

// // function longestCommonPrefix1(strs) {
// //   let lcp = "";
// //   let arr = [];
// //   let asc = strs.sort((a, b) => a.length - b.length);
// //   let firstItem = asc[0];

// //   for (let i = 0; i < firstItem.length; i++) {
// //     for (let j = 0; j < asc.length; j++) {
// //       if (asc[j][i] == firstItem[i]) {
// //         arr.push(asc[j][i]);
// //         if (arr.length == asc.length) {
// //           lcp += asc[j][i];
// //         }
// //       }
// //     }
// //     //console.log(arr);
// //     if (arr.length < asc.length) {
// //       break;
// //     }
// //     arr = [];
// //   }
// //   if (lcp == 0) {
// //     return "";
// //   } else {
// //     return lcp;
// //   }
// // }
// // console.log(longestCommonPrefix1(["Drive", "Driver", "Driving", "Drove"]));
// // console.log(longestCommonPrefix1(["flower", "flow", "flight"]));
// // console.log(longestCommonPrefix1(["dog", "race", "car"]));

// // function LCP(strs) {
// //   function findMinLength(strs) {
// //     strs = strs.sort((a, b) => a.length - b.length);
// //     return strs[0].length;
// //   }
