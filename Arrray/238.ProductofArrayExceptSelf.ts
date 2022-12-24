//Time = O(n)
function productExceptSelf(nums: number[]): number[] {
    let output = new Array(nums.length).fill(1)
    let product = 1;
    //multiply from the left
    for (let i = 0; i < nums.length; i++) {
        output[i] = output[i] * product
        product = product * nums[i]
    }
    product = 1;
    //multiply from the right
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] = output[i] * product
        product = product * nums[i]
    }
    return output
};

productExceptSelf([1, 2, 3, 4])