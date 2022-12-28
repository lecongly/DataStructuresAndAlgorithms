//T = O(nlog(mn))

function searchMatrix(matrix: number[][], target: number): boolean {
    const columns = matrix[0].length
    const rows = matrix.length
    for (let i = 0; i < rows; i++) {
        let left = 0
        let right = columns - 1;
        let middle
        while (left <= right) {
            middle = Math.floor((left + right) / 2)
            if (target === matrix[i][middle]) {
                return true
            } else if (target < matrix[i][middle]) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
    }
    return false;
};

const matrix1 = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22]]
console.log(searchMatrix(matrix1, 10))