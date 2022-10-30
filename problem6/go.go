package main

import "fmt"

func exist(board [][]byte, word string) bool {
    wordChars := []rune(word)
    rows := len(board)
    cols := len(board[0])
    visited := make([][]bool, rows)

    for i := 0; i < rows; i++ {
        visited[i] = make([]bool, cols)
    }

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if board[i][j] == byte(wordChars[0]) && dfs(board, wordChars, i, j, 0, visited) {
                return true
            }
        }
    }

    return false
}

func dfs(board [][]byte, word []rune, i, j, k int, visited [][]bool) bool {
    if k == len(word) {
        return true
    }

    if i >= len(board) || i < 0 || j >= len(board[0]) || j < 0 || visited[i][j] || board[i][j] != byte(word[k]) {
        return false
    }

    visited[i][j] = true

    found := dfs(board, word, i+1, j, k+1, visited) ||
        dfs(board, word, i-1, j, k+1, visited) ||
        dfs(board, word, i, j+1, k+1, visited) ||
        dfs(board, word, i, j-1, k+1, visited)

    visited[i][j] = false

    return found
}

func main() {
    board := [][]byte{
        {'A', 'B', 'C', 'E'},
        {'S', 'F', 'C', 'S'},
        {'A', 'D', 'E', 'E'},
    }
    word := "ABCCED"
    result := exist(board, word)
    fmt.Printf("Word %s exists: %v\n", word, result)
}
