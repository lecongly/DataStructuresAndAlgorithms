// You are given a string consisting of only lower case and upper-case English Alphabets and integers 0 to 9.
// Write a function that will take this string as Input
// and return the index of the first character that is non-repeating.
// Input 'abcbad' -> 2

//T= O(n^2), S=O(1)
function findNonRepeatingCharacter(string: string): number {
    let repeat: boolean
    for (let i = 0; i < string.length; i++) {
        repeat = false
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) {
                repeat = true
            }
        }
        if (repeat === false) {
            return i
        }
    }
    return null
}

//T= O(n), S=O(1)
function findNonRepeatingCharacter2(string: string): number {
    const hashTable: { [key: string]: number } = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] in hashTable) {
            hashTable[string[i]]++;
        } else {
            hashTable[string[i]] = 1;
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (hashTable[string[i]] === 1) {
            return i;
        }
    }
    return null;
}

console.log(findNonRepeatingCharacter2('ababcdd'))