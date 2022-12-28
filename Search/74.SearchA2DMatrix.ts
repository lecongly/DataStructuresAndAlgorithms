//T = O(log mn), S=O(1)
function searchMatrix(matrix: number[][], target: number): boolean {
    const columns = matrix[0].length
    const rows = matrix.length
    let top = 0
    let bottom = rows - 1
    let middle
    while (top <= bottom) {
        middle = Math.floor((top + bottom) / 2)
        if (target < matrix[middle][0]) {
            bottom = middle - 1;
        } else if (target > matrix[middle][columns - 1]) {
            top = middle + 1
        } else {
            break;
        }
    }
    if (top > bottom) return false
    let left = 0;
    let right = columns - 1;
    let midValue
    while (left <= right) {
        midValue = Math.floor((left + right) / 2)
        if (target === matrix[middle][midValue]) return true;
        else if (target < matrix[middle][midValue]) {
            right = midValue - 1
        } else {
            left = midValue + 1
        }
    }
    return false
};

const matrix = [[1, 2, 3], [4, 6, 7], [10, 12, 13]]

console.log(searchMatrix(matrix, 5))
