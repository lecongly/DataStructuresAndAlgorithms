//T= O(A*C) , S = O(A)
function coinChange(coins: number[], amount: number): number {
    let dpMinCoins = new Array(amount + 1).fill(Infinity)
    dpMinCoins[0] = 0
    for (let i = 1; i < dpMinCoins.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coinValue = coins[j]
            if (coinValue <= i) {
                dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i])
            }
        }
    }
    return dpMinCoins[dpMinCoins.length - 1] === Infinity ? -1 : dpMinCoins[dpMinCoins.length - 1]
};

console.log(coinChange([2, 5], 3))