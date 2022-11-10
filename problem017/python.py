def longest_common_subsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[m][n]


text1 = "abcde"
text2 = "ace"
result1 = longest_common_subsequence(text1, text2)
print(f"Longest common subsequence length: {result1}")

text3 = "abc"
text4 = "def"
result2 = longest_common_subsequence(text3, text4)
print(f"Longest common subsequence length: {result2}")
