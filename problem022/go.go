package main

import "fmt"

func generateParenthesis(n int) []string {
	var result []string
	generate(&result, "", 0, 0, n)
	return result
}

func generate(result *[]string, current string, open int, close int, max int) {
	if len(current) == max*2 {
		*result = append(*result, current)
		return
	}

	if open < max {
		generate(result, current+"(", open+1, close, max)
	}
	if close < open {
		generate(result, current+")", open, close+1, max)
	}
}

func main() {
	n1 := 3
	result1 := generateParenthesis(n1)
	fmt.Printf("Generated parentheses: %v\n", result1)

	n2 := 1
	result2 := generateParenthesis(n2)
	fmt.Printf("Generated parentheses: %v\n", result2)
}
