//T=O(n), S=O(1)
function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[\W_]/g, '')
    let left = 0, right = s.length - 1;
    while (left <= right) {
        if (s[left] !== s[right]) return false
        left++;
        right--;
    }
    return true
};