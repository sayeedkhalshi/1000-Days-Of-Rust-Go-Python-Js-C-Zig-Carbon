package main

import (
	"fmt"
	"sort"
)

func combinationSum2(candidates []int, target int) [][]int {
	var result [][]int
	var current []int
	sort.Ints(candidates)

	var backtrack func(target, start int)
	backtrack = func(target, start int) {
		if target == 0 {
			result = append(result, append([]int{}, current...))
			return
		}

		for i := start; i < len(candidates); i++ {
			if i > start && candidates[i] == candidates[i-1] {
				continue // Skip duplicates
			}
			if candidates[i] > target {
				break
			}
			current = append(current, candidates[i])
			backtrack(target-candidates[i], i+1)
			current = current[:len(current)-1]
		}
	}

	backtrack(target, 0)
	return result
}

func main() {
	candidates1 := []int{10, 1, 2, 7, 6, 1, 5}
	target1 := 8
	result1 := combinationSum2(candidates1, target1)
	fmt.Printf("Combinations: %v\n", result1)

	candidates2 := []int{2, 5, 2, 1, 2}
	target2 := 5
	result2 := combinationSum2(candidates2, target2)
	fmt.Printf("Combinations: %v\n", result2)
}
