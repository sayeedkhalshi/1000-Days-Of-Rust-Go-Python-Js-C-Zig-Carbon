package main

import "fmt"

func isMatch(s string, p string) bool {
	m, n := len(s), len(p)
	dp := make([][]bool, m+1)

	for i := range dp {
		dp[i] = make([]bool, n+1)
	}
	dp[0][0] = true

	for i := 0; i <= m; i++ { // Adjusted loop condition
		for j := 1; j <= n; j++ { // Adjusted loop condition
			if p[j-1] != '*' {
				dp[i][j] = i > 0 && (s[i-1] == p[j-1] || p[j-1] == '.') && dp[i-1][j-1]
			} else {
				dp[i][j] = dp[i][j-2] || (i > 0 && (s[i-1] == p[j-2] || p[j-2] == '.') && dp[i-1][j])
			}
		}
	}

	return dp[m][n]
}

func main() {
	s1, p1 := "aa", "a"
	result1 := isMatch(s1, p1)
	fmt.Printf("Match: %v\n", result1)

	s2, p2 := "mississippi", "mis*is*p*."
	result2 := isMatch(s2, p2)
	fmt.Printf("Match: %v\n", result2)
}
