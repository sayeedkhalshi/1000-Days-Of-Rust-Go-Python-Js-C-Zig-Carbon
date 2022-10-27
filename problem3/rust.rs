fn trap(height: Vec<i32>) -> i32 {
    let n = height.len();
    if n <= 2 {
        return 0;
    }

    let mut left_max = vec![0; n];
    let mut right_max = vec![0; n];

    let mut max = height[0];
    for i in 0..n {
        left_max[i] = max;
        max = max.max(height[i]);
    }

    max = height[n - 1];
    for i in (0..n).rev() {
        right_max[i] = max;
        max = max.max(height[i]);
    }

    let mut total = 0;
    for i in 0..n {
        let min_max = left_max[i].min(right_max[i]);
        if min_max > height[i] {
            total += min_max - height[i];
        }
    }

    total
}
