//T=O(n), S=O(n)
function rob(nums: number[]): number {
    if (nums === null || nums.length === 0) return 0;
    const dp = [];
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }
    return dp[dp.length - 1]

};

console.log(rob([1, 2, 3, 1]))