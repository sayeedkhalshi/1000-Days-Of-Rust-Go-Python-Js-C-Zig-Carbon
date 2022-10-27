package main

import "fmt"

func trap(height []int) int {
    n := len(height)
    if n <= 2 {
        return 0
    }

    leftMax := make([]int, n)
    rightMax := make([]int, n)

    max := height[0]
    for i := 0; i < n; i++ {
        leftMax[i] = max
        max = maxInt(max, height[i])
    }

    max = height[n-1]
    for i := n - 1; i >= 0; i-- {
        rightMax[i] = max
        max = maxInt(max, height[i])
    }

    total := 0
    for i := 0; i < n; i++ {
        minMax := minInt(leftMax[i], rightMax[i])
        if minMax > height[i] {
            total += minMax - height[i]
        }
    }

    return total
}

func maxInt(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func minInt(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func main() {
    height := []int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
    result := trap(height)
    fmt.Printf("Trapped water: %d\n", result)
}
