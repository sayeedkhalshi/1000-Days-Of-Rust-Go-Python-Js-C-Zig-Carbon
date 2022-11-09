function lengthOfLIS(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const dp = new Array(nums.length).fill(1);
    let maxLen = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
}

const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
const result1 = lengthOfLIS(nums1);
console.log(`Longest increasing subsequence length: ${result1}`);

const nums2 = [0, 1, 0, 3, 2, 3];
const result2 = lengthOfLIS(nums2);
console.log(`Longest increasing subsequence length: ${result2}`);
