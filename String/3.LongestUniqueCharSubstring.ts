// Given a string s, find the length of the longest substring without repeating characters.

//T= O(n), S = (O(min(n,m))
function maxUniqueLength(string: string): number {
    let start = 0;
    let max = 0;
    const seen: { [key: string]: number } = {}

    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (char in seen) {
            start = Math.max(start, seen[char] + 1)
        }
        max = Math.max(max, i - start + 1)
        seen[char] = i
    }
    return max
}

console.log(maxUniqueLength('abcdbae'))