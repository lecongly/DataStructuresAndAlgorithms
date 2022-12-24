// Power Set - Given an integer array of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// [1,2,3] => [ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]

//Time = O(nx2^n) Space= O(nx2^n)
function powerSet(nums: number[]): number[][] {
    const result = []

    function helper(nums, i, subset) {
        if (i === nums.length) {
            result.push(subset.slice())
            return;
        }
        //    Dont add subset
        helper(nums, i + 1, subset)
        //    Add subset
        subset.push(nums[i])
        helper(nums, i + 1, subset)
        subset.pop();
    }

    helper(nums, 0, [])
    return result
}

console.log(powerSet([1, 2, 3]))