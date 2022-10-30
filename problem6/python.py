def exist(board, word):
    def dfs(i, j, k):
        if not (0 <= i < len(board) and 0 <= j < len(board[0])) or board[i][j] != word[k] or visited[i][j]:
            return False
        if k == len(word) - 1:
            return True

        visited[i][j] = True
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        for di, dj in directions:
            ni, nj = i + di, j + dj
            if dfs(ni, nj, k + 1):
                return True

        visited[i][j] = False
        return False

    rows = len(board)
    cols = len(board[0])
    visited = [[False] * cols for _ in range(rows)]

    for i in range(rows):
        for j in range(cols):
            if board[i][j] == word[0] and dfs(i, j, 0):
                return True

    return False


board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
]
word = "ABCCED"
result = exist(board, word)
print(f"Word '{word}' exists: {result}")
