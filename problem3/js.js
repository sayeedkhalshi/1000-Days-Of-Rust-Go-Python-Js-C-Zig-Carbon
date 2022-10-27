function trap(height) {
    const n = height.length;
    if (n <= 2) {
        return 0;
    }

    const leftMax = new Array(n);
    const rightMax = new Array(n);

    let max = height[0];
    for (let i = 0; i < n; i++) {
        leftMax[i] = max;
        max = Math.max(max, height[i]);
    }

    max = height[n - 1];
    for (let i = n - 1; i >= 0; i--) {
        rightMax[i] = max;
        max = Math.max(max, height[i]);
    }

    let total = 0;
    for (let i = 0; i < n; i++) {
        const minMax = Math.min(leftMax[i], rightMax[i]);
        if (minMax > height[i]) {
            total += minMax - height[i];
        }
    }

    return total;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(height);
console.log(`Trapped water: ${result}`);
