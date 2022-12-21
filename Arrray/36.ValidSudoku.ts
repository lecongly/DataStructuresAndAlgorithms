//Time = O(n^2) , Space = O(n)
function isValidSudoku(board: string[][]): boolean {
    const rowSet = new Set<string>();
    const colSet = new Set<string>();
    const boxSet = new Set<string>();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j]
            if(cell !== '.'){
                const rowKey = `${i}${cell}`
                const colKey = `${j}${cell}`
                const boxKey = `${Math.floor(i/3)}${Math.floor(j/3)}${cell}`

                if(rowSet.has(rowKey) || colSet.has(colKey) || boxSet.has(boxKey)) return false
                rowSet.add(rowKey);
                colSet.add(colKey);
                boxSet.add(boxKey);
            }
        }
    }
    return true
};
console.log(isValidSudoku([
     ["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
]))