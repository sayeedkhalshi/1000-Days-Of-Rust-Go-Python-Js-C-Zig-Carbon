function isMatch(s, p) {
    const m = s.length;
    const n = p.length;
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(false));
    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] !== "*") {
                dp[i][j] =
                    i > 0 &&
                    (s[i - 1] === p[j - 1] || p[j - 1] === ".") &&
                    dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    dp[i][j - 2] ||
                    (i > 0 &&
                        (s[i - 1] === p[j - 2] || p[j - 2] === ".") &&
                        dp[i - 1][j]);
            }
        }
    }

    return dp[m][n];
}

const s1 = "aa";
const p1 = "a";
const result1 = isMatch(s1, p1);
console.log(`Match: ${result1}`);

const s2 = "mississippi";
const p2 = "mis*is*p*.";
const result2 = isMatch(s2, p2);
console.log(`Match: ${result2}`);
