// let sum = 0;
// const romanNumeralValue = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
// //console.log(romanNumeralValue["I"]);

// function numeralValidator(s) {
//   for (let i = 0; i < s.length; ) {
//     if (romanNumeralValue[s[i]] == 1) {
//       if (romanNumeralValue[s[i + 3]]) {
//         return `wrongly placed numerals`;
//       } else if (
//         romanNumeralValue[s[i + 1]] &&
//         romanNumeralValue[s[i + 1]] > 1
//       ) {
//         if (
//           romanNumeralValue[s[i + 1]] !== 5 &&
//           romanNumeralValue[s[i + 1]] !== 10
//         ) {
//           return `wrongly placed numerals`;
//         } else if (
//           romanNumeralValue[s[i + 2]] &&
//           romanNumeralValue[s[i + 2]] == 1
//         ) {
//           return `wpn`;
//         } else if (romanNumeralValue[s[i - 1]] == 1) {
//           return `wpn`;
//         }
//         // if (romanNumeralValue[s[i + 1]] !== 5 &&
//         // romanNumeralValue[s[i + 1]] !== 10 && (romanNumeralValue[s[i + 2]] && romanNumeralValue[s[i + 2]] == 1)) {
//   console.log(`wrongly placed numerals`);
//   if (romanNumeralValue[s[i - 1]] == 1) {
//     return `wrongly placed numerals`;
//   }
// }
//         else {
//           return i;
//         }
//       } else {
//         return i;
//       }
//     }
//     // } else if (romanNumeralValue[s[i]] == 5) {
//     //   if (romanNumeralValue[s[i + 1]] && romanNumeralValue[s[i + 1]] !== 1) {
//     //     return `wrongly placed numerals`;
//     //   } else if (
//     //     romanNumeralValue[s[i + 2]] &&
//     //     romanNumeralValue[s[i + 2]] !== 1
//     //   ) {
//     //     return `wrongly placed numerals`
//     //   }
//     //   return i;
//   }
// }

// console.log(numeralValidator("IIm"));
// //CMDIIVX

// let sum = 0;
// const romanNumeralValue = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function toInteger(s) {
  let sum = 0;
  const romanNumeralValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; ) {
    if (romanNumeralValue[s[i]] >= romanNumeralValue[s[i + 1]]) {
      sum += romanNumeralValue[s[i]];
      i++;
    } else if (romanNumeralValue[s[i]] < romanNumeralValue[s[i + 1]]) {
      sum += romanNumeralValue[s[i + 1]] - romanNumeralValue[s[i]];
      i += 2;
    } else if (romanNumeralValue[s[i]]) {
      sum += romanNumeralValue[s[i]];
      i++;
    }
  }
  return sum;
}

console.log(toInteger("III"));
