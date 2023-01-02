//T=O(n^2), S=O(n)
function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) return 0
    let max = 1
    const dp = new Array(nums.length).fill(1)
    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                dp[j] = Math.max(dp[i] + 1, dp[j])
            }
        }
        max = Math.max(max, dp[j])
    }
    return max
};