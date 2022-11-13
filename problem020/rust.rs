pub fn max_area(height: Vec<i32>) -> i32 {
    let mut max = 0;
    let (mut left, mut right) = (0, height.len() - 1);

    while left < right {
        let h = height[left].min(height[right]);
        let w = (right - left) as i32;
        let area = h * w;
        max = max.max(area);

        if height[left] < height[right] {
            left += 1;
        } else {
            right -= 1;
        }
    }

    max
}
