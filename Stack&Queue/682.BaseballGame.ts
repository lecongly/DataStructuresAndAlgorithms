function calPoints(operations: string[]): number {
    let scores: number[] = [];
    for (const operation of operations) {
        switch (operation) {
            case '+':
                scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
                break;
            case 'D':
                scores.push(scores[scores.length - 1] * 2);
                break;
            case 'C':
                scores.pop();
                break;
            default:
                scores.push(parseInt(operation));
                break;
        }
    }
    return scores.reduce((a, b) => a + b, 0)
};