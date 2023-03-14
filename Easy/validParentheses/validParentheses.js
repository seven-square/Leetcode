function isValid(s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  let lastIndex = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    let indexOfPair = lastIndex - i;
    if (s[i] == "(") {
      if (indexOfPair < i) {
        return false;
      } else if (s[i + 1] !== ")" && s[indexOfPair] !== ")") {
        return false;
      }
    }

    if (s[i] == ")") {
      if (indexOfPair > i) {
        return false;
      } else if (s[i - 1] !== "(" && s[indexOfPair] !== "(") {
        return false;
      }
    }

    if (s[i] == "[") {
      if (indexOfPair < i) {
        return false;
      } else if (s[i + 1] !== "]" && s[indexOfPair] !== "]") {
        return false;
      }
    }
    if (s[i] == "]") {
      if (indexOfPair > i) {
        return false;
      } else if (s[i - 1] !== "[" && s[indexOfPair] !== "[") {
        return false;
      }
    }
    if (s[i] == "{") {
      if (indexOfPair < i) {
        return false;
      } else if (s[i + 1] !== "}" && s[indexOfPair] !== "}") {
        return false;
      }
    }
    if (s[i] == "}") {
      if (indexOfPair > i) {
        return false;
      } else if (s[i - 1] !== "{" && s[indexOfPair] !== "{") {
        return false;
      }
    }
  }
  return true;
}

console.log(isValid("()"));
console.log(isValid("{[()]}"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("]()"));
console.log(isValid("]{()}"));
console.log(isValid("{]"));
console.log(isValid("{]({}(]}"));
console.log(isValid("{]({})[}"));
// function isValid(s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(") {
//       if (s[i + 1] !== ")") {
//         return false;
//       }
//     }
//     if (s[i] == ")") {
//       if (s[i + 1] == ")") {
//         return false;
//       }
//       if (s[i - 1] !== "(") {
//         return false;
//       }
//     }
//     if (s[i] == "{") {
//       if (s[i + 1] !== "}") {
//         return false;
//       }
//     }
//     if (s[i] == "}") {
//       if (s[i + 1] == "}") {
//         return false;
//       }
//       if (s[i - 1] !== "{") {
//         return false;
//       }
//     }
//     if (s[i] == "[") {
//       if (s[i + 1] !== "]") {
//         return false;
//       }
//     }
//     if (s[i] == "]") {
//       if (s[i + 1] == "]") {
//         return false;
//       }
//       if (s[i - 1] !== "[") {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("]()"));
// console.log(isValid("]{()}"));
