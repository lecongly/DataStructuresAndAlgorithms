//Time O(log n) for the best case (when n is a power of three)
// and O(1) for the worst case (when n is not a power of three).

//Space O(log n) for the best case (when n is a power of three)
// and O(1) for the worst case (when n is not a power of three).

function isPowerOfThree(n: number): boolean {
    if (n === 1) {
        return true;
    }
    if (n % 3 !== 0 || n === 0) {
        return false
    }
    return isPowerOfThree(n / 3)
};


function isPowerOfThree2(n: number): boolean {
    if (n < 1) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};

console.log(isPowerOfThree(27))