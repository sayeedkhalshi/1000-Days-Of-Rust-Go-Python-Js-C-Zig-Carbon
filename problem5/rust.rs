fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let mut intervals = intervals;
    if intervals.is_empty() {
        return vec![];
    }

    intervals.sort_by_key(|interval| interval[0]);

    let mut result = vec![intervals[0].clone()];

    for i in 1..intervals.len() {
        let current = &intervals[i];
        let last = result.last_mut().unwrap();

        if current[0] <= last[1] {
            last[1] = last[1].max(current[1]);
        } else {
            result.push(current.clone());
        }
    }

    result
}
