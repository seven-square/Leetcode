function convertToTitle(columnNumber) {
  let obj = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
  };
  if (columnNumber <= 26) {
    return obj[columnNumber];
  } else {
    let count = 0;
    let remainder = columnNumber;
    let title = "";
    while (remainder > 26) {
      count++;
      remainder = columnNumber - 26;
      if (remainder <= 26) {
        title = obj[remainder] + title;
        remainder = count;
      }
    }
    return obj[count] + obj[remainder] + title;
  }
}
console.log(convertToTitle(53));
