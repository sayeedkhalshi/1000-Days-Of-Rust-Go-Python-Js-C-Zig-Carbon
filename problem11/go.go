package main

import "fmt"

func maxArea(height []int) int {
    maxArea := 0
    left := 0
    right := len(height) - 1

    for left < right {
        h := minInt(height[left], height[right])
        w := right - left
        area := h * w

        if area > maxArea {
            maxArea = area
        }

        if height[left] < height[right] {
            left++
        } else {
            right--
        }
    }

    return maxArea
}

func minInt(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func main() {
    height := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
    result := maxArea(height)
    fmt.Printf("Max area: %d\n", result)
}
