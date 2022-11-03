def length_of_longest_substring(s: str) -> int:
    max_len = 0
    start = 0
    char_indices = [0] * 128

    for i, c in enumerate(s):
        if char_indices[ord(c)] > start:
            start = char_indices[ord(c)]
        char_indices[ord(c)] = i + 1
        max_len = max(max_len, i - start + 1)

    return max_len


s1 = "abcabcbb"
result1 = length_of_longest_substring(s1)
print(f"Length of Longest Substring: {result1}")

s2 = "bbbbb"
result2 = length_of_longest_substring(s2)
print(f"Length of Longest Substring: {result2}")

s3 = "pwwkew"
result3 = length_of_longest_substring(s3)
print(f"Length of Longest Substring: {result3}")
