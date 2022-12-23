//Time = O(n), Space = O(n)
function fib1(n: number): number {
    const ht: { [key: number]: number } = {
        0: 0,
        1: 1
    }
    if (n in ht) {
        return ht[n]
    } else {
        ht[n] = fib1(n - 1) + fib1(n - 2)
        return ht[n]
    }
};

//Time = O(n), space = O(1)
function fib(n: number): number {
    if (n <= 1) return n;
    let counter = 1;
    let prev = 0;
    let cur = 1;
    let next;
    while (counter < n) {
        next = prev + cur;
        prev = cur;
        cur = next;
        counter++
    }
    return next;
}

console.log(fib1(4))
console.log(fib(4))