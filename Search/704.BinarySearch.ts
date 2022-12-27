//T=O(logn), S=O(1)
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    let middle
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (target === nums[middle]) return middle
        if (target > nums[middle]) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1
};
