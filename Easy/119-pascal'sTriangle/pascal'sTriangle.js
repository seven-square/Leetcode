function generate(rowIndex) {
  let newArr = [];
  let arr;
  let no = 2;
  let currentI;
  if (rowIndex == 0) {
    newArr.push([1]);
  } else if (rowIndex == 1) {
    newArr.push([1]);
    newArr.push([1, 1]);
  } else {
    newArr.push([1]);
    newArr.push([1, 1]);
    while (no <= rowIndex) {
      arr = [];
      arr.push(1);
      let currentLastArr = newArr[newArr.length - 1];
      for (let i = 1; i < currentLastArr.length; i++) {
        currentI = currentLastArr[i] + currentLastArr[i - 1];
        arr.push(currentI);
      }
      arr.push(1);
      newArr.push(arr);
      no++;
    }
  }
  return newArr[newArr.length - 1];
}

console.log(generate(10));
