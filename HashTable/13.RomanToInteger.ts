//Time = O(n), Space = O(1)
function romanToInt(s: string): number {
    const symbols: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i]
        if (!symbols[c]) return -1;
        if (i === s.length - 1 || symbols[c] >= symbols[s[i + 1]]) {
            result += symbols[c]
        } else {
            result -= symbols[c]
        }
    }
    return result
};

console.log(romanToInt('XIV'))