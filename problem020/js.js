function maxArea(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        max = Math.max(max, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result1 = maxArea(height1);
console.log(`Max water container area: ${result1}`);

const height2 = [1, 1];
const result2 = maxArea(height2);
console.log(`Max water container area: ${result2}`);

const height3 = [4, 3, 2, 1, 4];
const result3 = maxArea(height3);
console.log(`Max water container area: ${result3}`);
