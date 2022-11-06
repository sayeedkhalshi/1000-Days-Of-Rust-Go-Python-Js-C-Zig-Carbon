package main

import "fmt"

func longestValidParentheses(s string) int {
    stack := []int{}
    maxLen := 0
    start := -1

    for i, c := range s {
        if c == '(' {
            stack = append(stack, i)
        } else {
            if len(stack) > 0 {
                stack = stack[:len(stack)-1]
                if len(stack) == 0 {
                    maxLen = maxInt(maxLen, i-start)
                } else {
                    maxLen = maxInt(maxLen, i-stack[len(stack)-1])
                }
            } else {
                start = i
            }
        }
    }

    return maxLen
}

func maxInt(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func main() {
    s1 := "(()"
    result1 := longestValidParentheses(s1)
    fmt.Printf("Longest valid parentheses: %d\n", result1)

    s2 := ")()())"
    result2 := longestValidParentheses(s2)
    fmt.Printf("Longest valid parentheses: %d\n", result2)
}
