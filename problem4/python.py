def length_of_lis(nums):
    n = len(nums)
    if n == 0:
        return 0

    dp = [1] * n

    for i in range(n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)


nums = [10, 9, 2, 5, 3, 7, 101, 18]
result = length_of_lis(nums)
print(f"Length of the longest increasing subsequence: {result}")
