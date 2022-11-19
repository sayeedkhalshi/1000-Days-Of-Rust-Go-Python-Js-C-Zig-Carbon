package main

import "fmt"

func removeDuplicates(nums []int) int {
    if len(nums) == 0 {
        return 0
    }

    i := 0
    for j := 1; j < len(nums); j++ {
        if nums[i] != nums[j] {
            i++
            nums[i] = nums[j]
        }
    }

    return i + 1
}

func main() {
    nums1 := []int{1, 1, 2}
    result1 := removeDuplicates(nums1)
    fmt.Printf("New length: %d\n", result1)

    nums2 := []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}
    result2 := removeDuplicates(nums2)
    fmt.Printf("New length: %d\n", result2)
}
