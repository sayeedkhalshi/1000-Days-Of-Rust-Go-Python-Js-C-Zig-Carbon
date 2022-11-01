package main

import "fmt"

func isValid(s string) bool {
    stack := make([]rune, 0)

    for _, c := range s {
        switch c {
        case '(', '{', '[':
            stack = append(stack, c)
        case ')':
            if len(stack) == 0 || stack[len(stack)-1] != '(' {
                return false
            }
            stack = stack[:len(stack)-1]
        case '}':
            if len(stack) == 0 || stack[len(stack)-1] != '{' {
                return false
            }
            stack = stack[:len(stack)-1]
        case ']':
            if len(stack) == 0 || stack[len(stack)-1] != '[' {
                return false
            }
            stack = stack[:len(stack)-1]
        default:
            return false // Invalid character
        }
    }

    return len(stack) == 0
}

func main() {
    s1 := "()"
    result1 := isValid(s1)
    fmt.Printf("Is valid: %v\n", result1)

    s2 := "()[]{}"
    result2 := isValid(s2)
    fmt.Printf("Is valid: %v\n", result2)

    s3 := "(]"
    result3 := isValid(s3)
    fmt.Printf("Is valid: %v\n", result3)

    s4 := "([)]"
    result4 := isValid(s4)
    fmt.Printf("Is valid: %v\n", result4)

    s5 := "{[]}"
    result5 := isValid(s5)
    fmt.Printf("Is valid: %v\n", result5)
}
