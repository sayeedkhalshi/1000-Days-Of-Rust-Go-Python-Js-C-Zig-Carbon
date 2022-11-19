def remove_duplicates(nums):
    if not nums:
        return 0

    i = 0
    for j in range(1, len(nums)):
        if nums[i] != nums[j]:
            i += 1
            nums[i] = nums[j]

    return i + 1


nums1 = [1, 1, 2]
result1 = remove_duplicates(nums1)
print(f"New length: {result1}")

nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
result2 = remove_duplicates(nums2)
print(f"New length: {result2}")
