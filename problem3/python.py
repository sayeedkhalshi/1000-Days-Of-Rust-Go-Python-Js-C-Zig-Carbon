def trap(height):
    n = len(height)
    if n <= 2:
        return 0

    left_max = [0] * n
    right_max = [0] * n

    max_val = height[0]
    for i in range(n):
        left_max[i] = max_val
        max_val = max(max_val, height[i])

    max_val = height[n - 1]
    for i in range(n - 1, -1, -1):
        right_max[i] = max_val
        max_val = max(max_val, height[i])

    total = 0
    for i in range(n):
        min_max = min(left_max[i], right_max[i])
        if min_max > height[i]:
            total += min_max - height[i]

    return total


height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
result = trap(height)
print(f"Trapped water: {result}")
