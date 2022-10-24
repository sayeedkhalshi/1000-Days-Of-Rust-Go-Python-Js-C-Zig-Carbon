package main

import "fmt"

func longestPalindromicSubstring(s string) string {
    n := len(s)
    start, maxLen := 0, 0

    for i := 0; i < n; i++ {
        left1, right1 := expandAroundCenter(s, i, i)
        left2, right2 := expandAroundCenter(s, i, i+1)

        if right1-left1 > maxLen {
            maxLen = right1 - left1
            start = left1
        }

        if right2-left2 > maxLen {
            maxLen = right2 - left2
            start = left2
        }
    }

    return s[start : start+maxLen+1]
}

func expandAroundCenter(s string, left int, right int) (int, int) {
    for left >= 0 && right < len(s) && s[left] == s[right] {
        left--
        right++
    }
    return left + 1, right - 1
}

func main() {
    s := "babad"
    result := longestPalindromicSubstring(s)
    fmt.Printf("Longest palindromic substring: %s\n", result)
}
