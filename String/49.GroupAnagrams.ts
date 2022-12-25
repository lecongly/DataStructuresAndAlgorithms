function groupAnagrams(strs: string[]): string[][] {
    const grouped: { [key: string]: string[] } = {}

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const key = word.split('').sort().join('')
        if (!grouped[key]) {
            grouped[key] = []
        }
        grouped[key].push(word)
    }
    return Object.values(grouped)
};