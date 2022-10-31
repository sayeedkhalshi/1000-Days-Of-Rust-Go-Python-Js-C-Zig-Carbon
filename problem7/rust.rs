fn longest_palindrome(s: String) -> String {
    if s.is_empty() {
        return String::new();
    }
    
    let s = s.as_bytes();
    let n = s.len();
    let mut start = 0;
    let mut max_len = 1;
    
    for i in 0..n {
        let (mut left, mut right) = (i, i);
        
        while left > 0 && right < n - 1 && s[left - 1] == s[right + 1] {
            left -= 1;
            right += 1;
        }
        
        if right - left + 1 > max_len {
            start = left;
            max_len = right - left + 1;
        }
    }
    
    for i in 0..n {
        let (mut left, mut right) = (i, i + 1);
        
        while left > 0 && right < n - 1 && s[left - 1] == s[right + 1] {
            left -= 1;
            right += 1;
        }
        
        if right - left + 1 > max_len {
            start = left;
            max_len = right - left + 1;
        }
    }
    
    String::from_utf8_lossy(&s[start..start + max_len]).to_string()
}
