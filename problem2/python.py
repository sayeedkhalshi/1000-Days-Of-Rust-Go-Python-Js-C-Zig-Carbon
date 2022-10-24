def longest_palindromic_substring(s):
    def expand_around_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1

    start = 0
    max_len = 0

    for i in range(len(s)):
        left1, right1 = expand_around_center(i, i)
        left2, right2 = expand_around_center(i, i + 1)

        if right1 - left1 > max_len:
            max_len = right1 - left1
            start = left1

        if right2 - left2 > max_len:
            max_len = right2 - left2
            start = left2

    return s[start:start + max_len + 1]


s = "babad"
result = longest_palindromic_substring(s)
print(f"Longest palindromic substring: {result}")
