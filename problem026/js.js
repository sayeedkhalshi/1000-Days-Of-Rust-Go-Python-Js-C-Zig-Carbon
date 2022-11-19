function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

const nums1 = [1, 1, 2];
const result1 = removeDuplicates(nums1);
console.log(`New length: ${result1}`);

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result2 = removeDuplicates(nums2);
console.log(`New length: ${result2}`);
