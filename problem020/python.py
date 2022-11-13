def max_area(height):
    max_area = 0
    left = 0
    right = len(height) - 1

    while left < right:
        h = min(height[left], height[right])
        w = right - left
        area = h * w
        max_area = max(max_area, area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area


height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
result1 = max_area(height1)
print(f"Max water container area: {result1}")

height2 = [1, 1]
result2 = max_area(height2)
print(f"Max water container area: {result2}")

height3 = [4, 3, 2, 1, 4]
result3 = max_area(height3)
print(f"Max water container area: {result3}")
