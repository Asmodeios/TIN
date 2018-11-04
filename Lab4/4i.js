function toCoins(money, coins) {
  var counts = [];
  for (let i = 0; i < coins.length; i++) {
    while (true) {
      if(money - coins[i] >= 0) {
        money -= coins[i];
        counts.push(coins[i]);
      } else {
        break;
      }
    }
  }
  console.log(counts);
}

toCoins(46, [25, 10, 5, 2, 1]);
