def merge(intervals):
    if not intervals:
        return []

    intervals.sort(key=lambda x: x[0])
    result = [intervals[0]]

    for i in range(1, len(intervals)):
        current = intervals[i]
        last = result[-1]

        if current[0] <= last[1]:
            last[1] = max(current[1], last[1])
        else:
            result.append(current)

    return result


intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
result = merge(intervals)
print(f"Merged Intervals: {result}")
