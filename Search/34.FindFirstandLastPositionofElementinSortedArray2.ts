// T= O(log n) S= O(1)
function searchRange2(nums: number[], target: number): number[] {
    const leftExtreme = findLeftExtreme2(nums, target)
    const rightExtreme = findRightExtreme2(nums, target)
    return [leftExtreme, rightExtreme]
};

const findLeftExtreme2 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    let middle
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (target === nums[middle]) {
            if (middle === 0) return middle
            else if (nums[middle - 1] === target) {
                right = middle - 1
            } else return middle
        } else if (target < nums[middle]) {
            right = middle - 1
        } else left = middle + 1
    }
    return -1
}
const findRightExtreme2 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;
    let middle
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (target === nums[middle]) {
            if (middle === nums.length - 1) return middle
            else if (nums[middle + 1] === target) {
                left = middle + 1
            } else return middle
        } else if (target < nums[middle]) {
            right = middle - 1
        } else left = middle + 1
    }
    return -1
}


const test2 = [5, 7, 7, 8, 8, 10];
const target2 = 8

console.log(searchRange2(test2, target2))