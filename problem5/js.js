function merge(intervals) {
    if (!intervals.length) {
        return [];
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];

        if (current[0] <= last[1]) {
            last[1] = Math.max(current[1], last[1]);
        } else {
            result.push(current);
        }
    }

    return result;
}

const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];
const result = merge(intervals);
console.log(`Merged Intervals: ${JSON.stringify(result)}`);
