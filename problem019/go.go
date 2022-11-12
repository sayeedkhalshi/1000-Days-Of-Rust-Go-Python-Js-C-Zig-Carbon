package main

import "fmt"

func longestPalindrome(s string) string {
	n := len(s)
	if n < 2 {
		return s
	}

	start, maxLen := 0, 1

	for i := 0; i < n; i++ {
		left1, len1 := expandAroundCenter(s, i, i)
		left2, len2 := expandAroundCenter(s, i, i+1)

		left, length := left1, len1
		if len2 > len1 {
			left, length = left2, len2
		}

		if length > maxLen {
			start, maxLen = left, length
		}
	}

	return s[start : start+maxLen]
}

func expandAroundCenter(s string, left, right int) (int, int) {
	for left >= 0 && right < len(s) && s[left] == s[right] {
		left--
		right++
	}
	return left + 1, right - left - 1
}

func main() {
	s1 := "babad"
	result1 := longestPalindrome(s1)
	fmt.Printf("Longest palindromic substring: %s\n", result1)

	s2 := "cbbd"
	result2 := longestPalindrome(s2)
	fmt.Printf("Longest palindromic substring: %s\n", result2)
}
