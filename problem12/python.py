def is_valid(s: str) -> bool:
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)

    return not stack


s1 = "()"
result1 = is_valid(s1)
print(f"Is valid: {result1}")

s2 = "()[]{}"
result2 = is_valid(s2)
print(f"Is valid: {result2}")

s3 = "(]"
result3 = is_valid(s3)
print(f"Is valid: {result3}")

s4 = "([)]"
result4 = is_valid(s4)
print(f"Is valid: {result4}")

s5 = "{[]}"
result5 = is_valid(s5)
print(f"Is valid: {result5}")
