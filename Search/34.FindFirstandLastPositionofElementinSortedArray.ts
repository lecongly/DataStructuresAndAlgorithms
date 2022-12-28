// T= O(log n) S= O(log n)
function searchRange(nums: number[], target: number): number[] {
    const range = [-1, -1]
    findLeftExtreme(nums, target, range)
    findRightExtreme(nums, target, range)
    return range
};
const findLeftExtreme = (nums: number[], target: number, range: number[], left = 0, right = nums.length) => {
    if (left > right) return;
    const middle = Math.floor((left + right) / 2)
    if (target === nums[middle]) {
        if (middle === 0) range[0] = middle
        else if (nums[middle - 1] === target) {
            findLeftExtreme(nums, target, range, left, middle - 1)
        } else range[0] = middle
    } else if (target < nums[middle]) {
        findLeftExtreme(nums, target, range, left, middle - 1)
    } else {
        findLeftExtreme(nums, target, range, middle + 1, right)
    }
}
const findRightExtreme = (nums: number[], target: number, range: number[], left = 0, right = nums.length - 1) => {
    if (left > right) return;
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
        if (middle === nums.length - 1) range[1] = middle;
        else if (target === nums[middle + 1]) {
            findRightExtreme(nums, target, range, middle + 1, right);
        } else range[1] = middle;
    } else if (target < nums[middle]) {
        findRightExtreme(nums, target, range, left, middle - 1);
    } else {
        findRightExtreme(nums, target, range, middle + 1, right);
    }
}

const test = [5, 7, 7, 8, 8, 10];
const target = 8

console.log(searchRange(test, target))