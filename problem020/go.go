package main

import "fmt"

func maxArea(height []int) int {
	max := 0
	left, right := 0, len(height)-1

	for left < right {
		h := minInt(height[left], height[right])
		w := right - left
		area := h * w
		max = maxInt(max, area)

		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}

	return max
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	height1 := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
	result1 := maxArea(height1)
	fmt.Printf("Max water container area: %d\n", result1)

	height2 := []int{1, 1}
	result2 := maxArea(height2)
	fmt.Printf("Max water container area: %d\n", result2)

	height3 := []int{4, 3, 2, 1, 4}
	result3 := maxArea(height3)
	fmt.Printf("Max water container area: %d\n", result3)
}
