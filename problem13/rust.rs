pub fn longest_valid_parentheses(s: String) -> i32 {
    let mut stack = Vec::new();
    let mut max_len = 0;
    let mut start = -1;

    for (i, c) in s.chars().enumerate() {
        if c == '(' {
            stack.push(i as i32);
        } else {
            if let Some(top) = stack.pop() {
                if stack.is_empty() {
                    max_len = max_len.max(i as i32 - start);
                } else {
                    max_len = max_len.max(i as i32 - stack.last().unwrap());
                }
            } else {
                start = i as i32;
            }
        }
    }

    max_len
}
