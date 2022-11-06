def longest_valid_parentheses(s: str) -> int:
    stack = [-1]
    max_len = 0

    for i, c in enumerate(s):
        if c == '(':
            stack.append(i)
        else:
            stack.pop()
            if not stack:
                stack.append(i)
            else:
                max_len = max(max_len, i - stack[-1])

    return max_len


s1 = "(()"
result1 = longest_valid_parentheses(s1)
print(f"Longest valid parentheses: {result1}")

s2 = ")()())"
result2 = longest_valid_parentheses(s2)
print(f"Longest valid parentheses: {result2}")
