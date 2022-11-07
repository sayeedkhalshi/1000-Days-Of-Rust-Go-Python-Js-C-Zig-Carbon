def combination_sum2(candidates, target):
    result = []
    current = []
    candidates.sort()

    def backtrack(start, target):
        if target == 0:
            result.append(current[:])
            return

        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i - 1]:
                continue  # Skip duplicates
            if candidates[i] > target:
                break
            current.append(candidates[i])
            backtrack(i + 1, target - candidates[i])
            current.pop()

    backtrack(0, target)
    return result


candidates1 = [10, 1, 2, 7, 6, 1, 5]
target1 = 8
result1 = combination_sum2(candidates1, target1)
print(f"Combinations: {result1}")

candidates2 = [2, 5, 2, 1, 2]
target2 = 5
result2 = combination_sum2(candidates2, target2)
print(f"Combinations: {result2}")
