function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1));

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] =
                    1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

const word1 = "horse";
const word2 = "ros";
const result1 = minDistance(word1, word2);
console.log(`Minimum distance: ${result1}`);

const word3 = "intention";
const word4 = "execution";
const result2 = minDistance(word3, word4);
console.log(`Minimum distance: ${result2}`);
