// Time O(log n) for the best case (when n is a power of two)
// and O(1) for the worst case (when n is not a power of two).

// Space = O(1)

function isPowerOfTwo(n: number): boolean {
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return n === 1;
};

function isPowerOfTwo2(n: number): boolean {
    if (n === 1) return true
    if (n % 2 !== 0 || n === 0) return false
    return isPowerOfTwo2(n / 2)
};

console.log(isPowerOfTwo(3))