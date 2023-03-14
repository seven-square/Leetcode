function maximumWealth(accounts) {
  let obj = {};
  for (i = 0; i < accounts.length; i++) {
    let currentTotal = 0;
    // console.log({ currentTotal }, accounts[i]);
    for (j = 0; j < accounts[i].length; j++) {
      //   console.log(accounts[i][j], currentTotal);
      currentTotal += accounts[i][j];
      //   console.log(accounts[i][j], { currentTotal });
    }
    obj[i] = currentTotal;
  }
  let arr = Object.values(obj);
  let max = Math.max(...arr);
  for (const property in obj) {
    if (obj[property] == max) {
      return max;
    }
  }
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
