//T = O(n), S = O(n)
function isValid(s: string): boolean {
    const stack = []
    const pairsHashMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (pairsHashMap[char]) {
            stack.push(char)
        } else if (pairsHashMap[stack.pop()] !== char) {
            return false
        }
    }
    return stack.length === 0 ? true : false
};