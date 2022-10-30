function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const visited = new Array(rows);

    for (let i = 0; i < rows; i++) {
        visited[i] = new Array(cols).fill(false);
    }

    function dfs(i, j, k) {
        if (
            i < 0 ||
            i >= rows ||
            j < 0 ||
            j >= cols ||
            visited[i][j] ||
            board[i][j] !== word[k]
        ) {
            return false;
        }

        if (k === word.length - 1) {
            return true;
        }

        visited[i][j] = true;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;

            if (dfs(ni, nj, k + 1)) {
                return true;
            }
        }

        visited[i][j] = false;
        return false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];
const word = "ABCCED";
const result = exist(board, word);
console.log(`Word '${word}' exists: ${result}`);
