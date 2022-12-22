//Time=O(n), Space =O(k) k is the size of the alphabet
function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let start = 0;
    const charCounts: { [key: string]: number } = {};

    for (let end = 0; end < s.length; end++) {
        const c = s[end];
        if (c in charCounts) {
            start = Math.max(start, charCounts[c] + 1);
        }
        charCounts[c] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcd'))