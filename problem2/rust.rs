fn longest_palindromic_substring(s: String) -> String {
    let s = s.as_bytes();
    let n = s.len();
    let mut start = 0;
    let mut max_len = 0;

    for i in 0..n {
        let (left, right) = expand_around_center(&s, i, i);
        let len1 = right - left;

        let (left, right) = expand_around_center(&s, i, i + 1);
        let len2 = right - left;

        let len = len1.max(len2);

        if len > max_len {
            max_len = len;
            start = i - (len - 1) / 2;
        }
    }

    String::from_utf8_lossy(&s[start..start + max_len]).to_string()
}

fn expand_around_center(s: &[u8], mut left: usize, mut right: usize) -> (usize, usize) {
    let n = s.len();
    while left > 0 && right < n - 1 && s[left - 1] == s[right + 1] {
        left -= 1;
        right += 1;
    }
    (left, right + 1)
}

fn main() {
    let s = String::from("babad");
    let result = longest_palindromic_substring(s);
    println!("Longest palindromic substring: {}", result);
}
