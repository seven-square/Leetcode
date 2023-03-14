function generate(numRows) {
  let newArr = [];
  let arr;
  let no = 3;
  let currentI;
  if (numRows == 1) {
    newArr.push([1]);
  } else if (numRows == 2) {
    newArr.push([1]);
    newArr.push([1, 1]);
  } else {
    newArr.push([1]);
    newArr.push([1, 1]);
    while (no <= numRows) {
      arr = [];
      arr.push(1);
      let lastIndex = newArr.length - 1;
      let currentLastArr = newArr[lastIndex];
      for (let i = 1; i < currentLastArr.length; i++) {
        currentI = currentLastArr[i] + currentLastArr[i - 1];
        arr.push(currentI);
      }
      arr.push(1);
      newArr.push(arr);
      no++;
    }
  }
  return newArr;
}

console.log(generate(5));
