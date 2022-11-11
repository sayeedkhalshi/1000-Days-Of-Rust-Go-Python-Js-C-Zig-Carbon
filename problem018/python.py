def is_match(s: str, p: str) -> bool:
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True

    for i in range(m + 1):
        for j in range(1, n + 1):
            if p[j - 1] != '*':
                dp[i][j] = i > 0 and (
                    s[i - 1] == p[j - 1] or p[j - 1] == '.') and dp[i - 1][j - 1]
            else:
                dp[i][j] = dp[i][j - 2] or (i > 0 and (s[i - 1] ==
                                            p[j - 2] or p[j - 2] == '.') and dp[i - 1][j])

    return dp[m][n]


s1, p1 = "aa", "a"
result1 = is_match(s1, p1)
print(f"Match: {result1}")

s2, p2 = "mississippi", "mis*is*p*."
result2 = is_match(s2, p2)
print(f"Match: {result2}")
