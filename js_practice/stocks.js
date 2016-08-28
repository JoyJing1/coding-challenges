// Cannot buy and sell at same time

function highestProfit(stocks) {
  if (stocks.length <= 1) { return "not enough time to buy & sell"; }
  let min = stocks[0];
  let buy = stocks[0];
  let sell = stocks[1];
  let profit = sell - buy;
  if (stocks[1] < min) { min = stocks[1]; }

  for (let i = 2; i < stocks.length ; i++) {
    let curr = stocks[i];
    if (curr - min > profit) {
      buy = min;
      sell = curr;
      profit = sell - buy;
    }
    if (curr < min) {
      min = curr;
    }
  }
  return [buy, sell];
}

console.log(highestProfit([10, 7, 5, 8, 11, 9]));
