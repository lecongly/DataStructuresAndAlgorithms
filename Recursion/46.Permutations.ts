//Time = O(n!xn) Space= O(n!xn)

function permute(nums: number[]): number[][] {
    const result: number[][] = []

    function helper(nums, i) {
        if (i === nums.length - 1) {
            result.push(nums.slice());
            return;
        }
        for (let j = i; j < nums.length; j++) {
            //swap i,j
            [nums[i], nums[j]] = [nums[j], nums[i]];
            //recursive
            helper(nums, i + 1);
            //swap i,j
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    helper(nums, 0);
    return result
};

console.log(permute([1, 2, 3]))