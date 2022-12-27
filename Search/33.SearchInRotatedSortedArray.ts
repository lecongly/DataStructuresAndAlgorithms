// T=O(log n)
function SearchInRotatedSortedArray(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    let middle
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (target === nums[middle]) return middle
        if (nums[left] < nums[middle]) {
            if (target >= nums[left] && target < nums[middle]) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        } else {
            if (target <= nums[right] && target > nums[middle]) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
    }
    return -1;
};

console.log(SearchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0))