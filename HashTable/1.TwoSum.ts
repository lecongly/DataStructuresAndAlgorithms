//Time = O(n), Space = O(n)
function twoSum(nums: number[], target: number): number[] {
    const hashTable ={};
    let neededValue;
    for(let i=0;i<nums.length;i++){
        neededValue = target - nums[i];
        if(neededValue in hashTable){
            return [hashTable[neededValue],i];
        }else{
            hashTable[nums[i]]=i;
        }
    }
    return[];
}

console.log(twoSum([1,2,3,4,5,6],5))