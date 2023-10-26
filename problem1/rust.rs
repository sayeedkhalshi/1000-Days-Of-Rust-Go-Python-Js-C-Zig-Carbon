fn max_subarray_sum(nums: Vec<i32>) -> i32 {
    let mut max_sum = nums[0];
    let mut current_sum = nums[0];

    for num in nums.iter().skip(1) {
        current_sum = num.max(current_sum + num);
        max_sum = max_sum.max(current_sum);
    }

    max_sum
}

fn main() {
    let nums = vec![-2, 1, -3, 4, -1, 2, 1, -5, 4];
    let result = max_subarray_sum(nums);
    println!("Maximum subarray sum: {}", result);
}
