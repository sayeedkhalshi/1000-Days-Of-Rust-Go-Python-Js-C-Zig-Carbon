pub fn length_of_longest_substring(s: String) -> i32 {
    let mut max_len = 0;
    let mut start = 0;
    let mut char_indices = [0; 128];

    for (i, c) in s.chars().enumerate() {
        if char_indices[c as usize] > start {
            start = char_indices[c as usize];
        }
        char_indices[c as usize] = i + 1;
        max_len = max_len.max(i - start + 1);
    }

    max_len as i32
}
