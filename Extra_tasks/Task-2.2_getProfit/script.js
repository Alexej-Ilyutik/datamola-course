function getProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
}

console.log(getProfit([7, 1, 5, 3, 6, 4]));
console.log(getProfit([1, 2, 3, 4, 5]));
console.log(getProfit([7, 6, 4, 3, 1]));