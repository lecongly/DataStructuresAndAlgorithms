function threeSum(nums: number[]): number[][] {
    const triplets: number[][] = [];
    nums.sort((a, b) => a - b); // sort the array in ascending order

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate elements

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                triplets.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++; // skip duplicate elements
                while (j < k && nums[k] === nums[k + 1]) k--; // skip duplicate elements
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return triplets;
}