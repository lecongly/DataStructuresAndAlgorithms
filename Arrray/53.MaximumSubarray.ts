function maxSubArray(nums: number[]): number {
    if (nums.length === 0) {
        return null
    }
    let maxValue = nums[0]
    let currentMax = nums[0]
    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i])
        console.log(currentMax)
        maxValue = Math.max(maxValue, currentMax)
    }
    return maxValue
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))