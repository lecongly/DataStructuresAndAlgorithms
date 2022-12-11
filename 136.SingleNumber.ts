function singleNumber(nums: number[]): number {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
    // ^ (bitwise XOR) Binary XOR Operator copies the bit if it is set in one operand but not both.
  }
  return result;
}

console.log(singleNumber([1, 3, 2, 1, 2]));
