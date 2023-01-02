//T= O(M*N) , S = O(M*N)
function uniquePaths(m: number, n: number): number {
    const dpMatrix = []
    for (let row = 1; row <= n; row++) {
        dpMatrix.push([])
    }
//    Fill out first row is 1
    for (let col = 0; col < m; col++) {
        dpMatrix[0][col] = 1
    }
//    Fill out first col is 1
    for (let row = 0; row < n; row++) {
        dpMatrix[row][0] = 1
    }

    //  1  1   1   1
    //  1  2   3   4
    //  1  3   6   10

    for (let row = 1; row < n; row++) {
        for (let col = 1; col < m; col++) {
            dpMatrix[row][col] = dpMatrix[row - 1][col] + dpMatrix[row][col - 1]
        }
    }
    return dpMatrix[n - 1][m - 1]
};