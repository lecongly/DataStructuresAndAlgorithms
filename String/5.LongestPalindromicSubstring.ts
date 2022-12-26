//T=O(n^3), S=O(1)
function longestPalindrome(s: string): string {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const substr = s.substring(i, j);
            if (isPalindrome(substr) && substr.length > longest.length) {
                longest = substr;
            }
        }
    }

    return longest;
};

function isPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;
    while (left <= right) {
        if (s[left] !== s[right]) return false
        left++;
        right--;
    }
    return true
};