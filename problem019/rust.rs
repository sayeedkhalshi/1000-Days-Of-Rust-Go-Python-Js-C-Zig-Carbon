pub fn longest_palindrome(s: String) -> String {
    let s = s.as_bytes();
    let n = s.len();
    if n < 2 {
        return s.iter().map(|&c| c as char).collect();
    }

    let (mut start, mut max_len) = (0, 1);

    for i in 0..n {
        let (left1, len1) = expand_around_center(&s, i, i);
        let (left2, len2) = expand_around_center(&s, i, i + 1);

        let (left, len) = if len1 > len2 { (left1, len1) } else { (left2, len2) };

        if len > max_len {
            start = left;
            max_len = len;
        }
    }

    s[start..start + max_len].iter().map(|&c| c as char).collect()
}

fn expand_around_center(s: &[u8], left: usize, right: usize) -> (usize, usize) {
    let (mut l, mut r) = (left, right);
    while l > 0 && r < s.len() && s[l - 1] == s[r] {
        l -= 1;
        r += 1;
    }
    (l, r - l)
}
