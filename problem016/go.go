package main

import "fmt"

func lengthOfLIS(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	dp := make([]int, len(nums))
	maxLen := 1

	for i := 0; i < len(nums); i++ {
		dp[i] = 1
		for j := 0; j < i; j++ {
			if nums[i] > nums[j] {
				dp[i] = maxInt(dp[i], dp[j]+1)
			}
		}
		maxLen = maxInt(maxLen, dp[i])
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
	nums1 := []int{10, 9, 2, 5, 3, 7, 101, 18}
	result1 := lengthOfLIS(nums1)
	fmt.Printf("Longest increasing subsequence length: %d\n", result1)

	nums2 := []int{0, 1, 0, 3, 2, 3}
	result2 := lengthOfLIS(nums2)
	fmt.Printf("Longest increasing subsequence length: %d\n", result2)
}
