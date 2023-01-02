//T=O(n), S=O(n)
function canJump(nums: number[]): boolean {
    let lastIndexPerfect = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= lastIndexPerfect) {
            lastIndexPerfect = i;
        }
    }
    return lastIndexPerfect === 0;
};