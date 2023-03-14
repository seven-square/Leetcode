function maxProfit(prices) {
  // let length = prices.length;
  let arr = [];
  for (let i = 0; i < prices.length; ) {
    let length = prices.length;
    //remove the first item
    let currentFirstItem = prices.splice(0, 1);
    // console.log(currentFirstItem);
    //get the max value of the remaining items in the array
    let max = Math.max(...prices);
    if (max - currentFirstItem > 0) {
      arr.push(max - currentFirstItem);
      // console.log({ arr });
    }
    // console.log({ i, max });
    // console.log({ prices, length });
    // console.log();
  }
  let maxProfit = Math.max(...arr);
  // console.log({ maxProfit });
  // let type = maxProfit > 0;
  if (maxProfit > 0) return maxProfit;
  return 0;
}

// maxProfit([9, 2, 3, 1, 7]);
console.log(maxProfit([9, 2, 3, 1, 7]));
console.log(maxProfit([7, 6, 1, 3, 2, 9, 2]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
// console.log(maxProfit([2, 4, 1]));

// function maxProfit(prices) {
//   let max = 0;
//   //let i = 1;
//   for (let i = 1; i < prices.length; i++) {
//     //while (i < prices.length) {
//     if (prices[i] > prices[0]) {
//       if (prices[i] - prices[0] > max) {
//         max = prices[i] - prices[0];
//       }
//       // i++;
//     } else {
//       prices.shift();
//       i = 0;
//     }
//   }
//   //     obj[prices[i]] = i + 1;
//   //   }
//   //   prices.sort();
//   //   let max = prices[prices.length - 1];
//   //   let min = prices[0];
//   //   while (obj[max] < obj[min]) {
//   //     prices.splice(-1);
//   //     max = prices[prices.length - 1];
//   //     min = prices[0];
//   //   }
//   //   let profit = max - min;
//   //   if (profit) return profit;
//   return max;
// }
