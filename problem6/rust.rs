fn exist(board: Vec<Vec<char>>, word: String) -> bool {
    let word_chars: Vec<char> = word.chars().collect();
    let rows = board.len();
    let cols = board[0].len();
    let mut visited = vec![vec![false; cols]; rows];

    for i in 0..rows {
        for j in 0..cols {
            if board[i][j] == word_chars[0] && dfs(&board, &word_chars, i, j, 0, &mut visited) {
                return true;
            }
        }
    }

    false
}

fn dfs(board: &Vec<Vec<char>, word: &Vec<char>, i: usize, j: usize, k: usize, visited: &mut Vec<Vec<bool>) -> bool {
    if k == word.len() {
        return true;
    }

    if i >= board.len() || i < 0 || j >= board[0].len() || j < 0 || visited[i][j] || board[i][j] != word[k] {
        return false;
    }

    visited[i][j] = true;

    let found = dfs(board, word, i + 1, j, k + 1, visited)
        || dfs(board, word, i - 1, j, k + 1, visited)
        || dfs(board, word, i, j + 1, k + 1, visited)
        || dfs(board, word, i, j - 1, k + 1, visited);

    visited[i][j] = false;

    found
}
