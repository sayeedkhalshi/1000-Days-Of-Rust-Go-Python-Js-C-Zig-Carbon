package main

import "fmt"

func lengthOfLIS(nums []int) int {
    n := len(nums)
    if n == 0 {
        return 0
    }

    dp := make([]int, n)
    for i := 0; i < n; i++ {
        dp[i] = 1
    }

    for i := 1; i < n; i++ {
        for j := 0; j < i; {
            if nums[i] > nums[j] {
                dp[i] = maxInt(dp[i], dp[j]+1)
            }
            j++
        }
    }

    max := dp[0]
    for i := 1; i < n; i++ {
        if dp[i] > max {
            max = dp[i]
        }
    }

    return max
}

func maxInt(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func main() {
    nums := []int{10, 9, 2, 5, 3, 7, 101, 18}
    result := lengthOfLIS(nums)
    fmt.Printf("Length of the longest increasing subsequence: %d\n", result)
}
