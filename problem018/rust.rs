pub fn is_match(s: String, p: String) -> bool {
    let s = s.as_bytes();
    let p = p.as_bytes();
    let m = s.len();
    let n = p.len();
    
    let mut dp = vec![vec![false; n + 1]; m + 1];
    dp[0][0] = true;

    for i in 0..=m {
        for j in 1..=n {
            if p[j - 1] != b'*' {
                dp[i][j] = i > 0 && (s[i - 1] == p[j - 1] || p[j - 1] == b'.') && dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i][j - 2] || (i > 0 && (s[i - 1] == p[j - 2] || p[j - 2] == b'.') && dp[i - 1][j]);
            }
        }
    }

    dp[m][n]
}
