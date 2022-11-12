def longest_palindrome(s: str) -> str:
    n = len(s)
    if n < 2:
        return s

    start, max_len = 0, 1

    def expand_around_center(left, right):
        while left >= 0 and right < n and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - left - 1

    for i in range(n):
        left1, len1 = expand_around_center(i, i)
        left2, len2 = expand_around_center(i, i + 1)

        left, length = (left1, len1) if len1 > len2 else (left2, len2)

        if length > max_len:
            start, max_len = left, length

    return s[start:start + max_len]


s1 = "babad"
result1 = longest_palindrome(s1)
print(f"Longest palindromic substring: {result1}")

s2 = "cbbd"
result2 = longest_palindrome(s2)
print(f"Longest palindromic substring: {result2}")
