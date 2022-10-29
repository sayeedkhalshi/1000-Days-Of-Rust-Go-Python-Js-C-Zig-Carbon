package main

import (
	"fmt"
	"sort"
)

func merge(intervals [][]int) [][]int {
    n := len(intervals)
    if n <= 1 {
        return intervals
    }

    // Sort intervals based on the start value
    sortIntervals(intervals)

    result := make([][]int, 0)
    current := intervals[0]

    for i := 1; i < n; i++ {
        next := intervals[i]

        if next[0] <= current[1] {
            // Merge intervals
            current[1] = maxInt(current[1], next[1])
        } else {
            result = append(result, current)
            current = next
        }
    }

    result = append(result, current)
    return result
}

func sortIntervals(intervals [][]int) {
    sort.Slice(intervals, func(i, j int) bool {
        return intervals[i][0] < intervals[j][0]
    })
}

func maxInt(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func main() {
    intervals := [][]int{{1, 3}, {2, 6}, {8, 10}, {15, 18}}
    result := merge(intervals)
    fmt.Printf("Merged Intervals: %v\n", result)
}
