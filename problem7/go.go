package main

import "fmt"

func longestPalindrome(s string) string {
    if len(s) == 0 {
        return ""
    }

    n := len(s)
    start := 0
    maxLen := 1

    for i := 0; i < n; i++ {
        left, right := i, i

        for left > 0 && right < n-1 && s[left-1] == s[right+1] {
            left--
            right++
        }

        if right-left+1 > maxLen {
            start = left
            maxLen = right - left + 1
        }
    }

    for i := 0; i < n; i++ {
        left, right := i, i+1

        for left > 0 && right < n-1 && s[left-1] == s[right+1] {
            left--
            right++
        }

        if right-left+1 > maxLen {
            start = left
            maxLen = right - left + 1
        }
    }

    return s[start : start+maxLen]
}

func main() {
    s1 := "babad"
    result1 := longestPalindrome(s1)
    fmt.Printf("Longest Palindromic Substring: %s\n", result1)

    s2 := "cbbd"
    result2 := longestPalindrome(s2)
    fmt.Printf("Longest Palindromic Substring: %s\n", result2)
}
