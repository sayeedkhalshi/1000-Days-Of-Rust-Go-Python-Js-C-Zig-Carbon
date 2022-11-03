package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
    maxLen := 0
    start := 0
    charIndices := [128]int{}

    for i, c := range s {
        if charIndices[c] > start {
            start = charIndices[c]
        }
        charIndices[c] = i + 1
        if i-start+1 > maxLen {
            maxLen = i - start + 1
        }
    }

    return maxLen
}

func main() {
    s1 := "abcabcbb"
    result1 := lengthOfLongestSubstring(s1)
    fmt.Printf("Length of Longest Substring: %d\n", result1)

    s2 := "bbbbb"
    result2 := lengthOfLongestSubstring(s2)
    fmt.Printf("Length of Longest Substring: %d\n", result2)

    s3 := "pwwkew"
    result3 := lengthOfLongestSubstring(s3)
    fmt.Printf("Length of Longest Substring: %d\n", result3)
}
