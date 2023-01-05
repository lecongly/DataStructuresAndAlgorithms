//T=O(n)
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    const validOperator = {
        '+': (n1: number, n2: number): number => n1 + n2,
        '-': (n1: number, n2: number): number => n1 - n2,
        '*': (n1: number, n2: number): number => n1 * n2,
        '/': (n1: number, n2: number): number => Math.trunc(n1 / n2),
    }
    for (const token of tokens) {
        if (validOperator[token]) {
            let n2 = stack.pop()
            let n1 = stack.pop()
            let result = validOperator[token](n1, n2)
            stack.push(result)
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack.pop()
};

console.log(evalRPN(["2", "1", "+", "3", "*"]))