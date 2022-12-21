//Time = O(n) , Space = O(1)
function removeElement(nums: number[], val: number): number {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

console.log(removeElement([1,2,3,4,5,5,5,5],5))