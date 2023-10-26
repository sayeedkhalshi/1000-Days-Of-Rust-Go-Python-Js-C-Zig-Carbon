function maxSubarraySum(nums) {
    let maxSum = (currentSum = nums[0]);

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarraySum(nums);
console.log(`Maximum subarray sum: ${result}`);
