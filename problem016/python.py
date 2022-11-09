def length_of_lis(nums):
    if not nums:
        return 0

    dp = [1] * len(nums)
    max_len = 1

    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
        max_len = max(max_len, dp[i])

    return max_len


nums1 = [10, 9, 2, 5, 3, 7, 101, 18]
result1 = length_of_lis(nums1)
print(f"Longest increasing subsequence length: {result1}")

nums2 = [0, 1, 0, 3, 2, 3]
result2 = length_of_lis(nums2)
print(f"Longest increasing subsequence length: {result2}")
