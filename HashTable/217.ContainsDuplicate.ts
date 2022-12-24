function containsDuplicate(nums: number[]): boolean {
    const ht: { [key: number]: boolean } = {}
    for (const number of nums) {
        if (ht[number]) {
            return true
        } else {
            ht[number] = true
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 4]))