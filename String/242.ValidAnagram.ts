//Time = O(n) , S=O(1)
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const sCharCounts: { [key: string]: number } = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        sCharCounts[char] = sCharCounts[char] + 1 || 1
    }
    for (let i = 0; i < t.length; i++) {
        const tChar = t[i]
        if (!sCharCounts[tChar]) return false
        else {
            sCharCounts[tChar]--
        }
    }
    return true

};