def generate_parenthesis(n):
    result = []
    generate(result, "", 0, 0, n)
    return result


def generate(result, current, open, close, max):
    if len(current) == max * 2:
        result.append(current)
        return

    if open < max:
        generate(result, current + "(", open + 1, close, max)
    if close < open:
        generate(result, current + ")", open, close + 1, max)


n1 = 3
result1 = generate_parenthesis(n1)
print(f"Generated parentheses: {result1}")

n2 = 1
result2 = generate_parenthesis(n2)
print(f"Generated parentheses: {result2}")
