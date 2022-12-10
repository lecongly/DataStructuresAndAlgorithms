function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = nums1.concat(nums2).sort((a, b) => a - b);
  const length = nums.length;
  return length % 2 === 0
    ? (nums[length / 2 - 1] + nums[length / 2]) / 2
    : nums[Math.floor(length / 2)];
}

const nums1 = [3];
const nums2 = [-2, -1];
console.log(findMedianSortedArrays(nums1, nums2));
