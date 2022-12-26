// @ts-ignore
function longestPalindrome(s: string): number {
    const charCounts: { [key: string]: number } = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        charCounts[char] = charCounts[char] + 1 || 1
    }
    let longest = 0;
    let hasOdd = false;
    for (const count of Object.values(charCounts)) {
        if (count % 2 === 0) {
            longest += count;
        } else {
            hasOdd = true;
            longest += count - 1;
        }
    }

    return hasOdd ? longest + 1 : longest;
};


console.log(longestPalindrome('abcsas'))