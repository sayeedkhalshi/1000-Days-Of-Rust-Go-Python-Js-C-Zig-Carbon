function longestPalindrome(s) {
    const n = s.length;
    if (n < 2) {
        return s;
    }

    let start = 0;
    let maxLen = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--;
            right++;
        }
        return left + 1, right - left - 1;
    }

    for (let i = 0; i < n; i++) {
        let [left1, len1] = expandAroundCenter(i, i);
        let [left2, len2] = expandAroundCenter(i, i + 1);

        let [left, length] = len1 > len2 ? [left1, len1] : [left2, len2];

        if (length > maxLen) {
            start = left;
            maxLen = length;
        }
    }

    return s.substring(start, start + maxLen);
}

const s1 = "babad";
const result1 = longestPalindrome(s1);
console.log(`Longest palindromic substring: ${result1}`);

const s2 = "cbbd";
const result2 = longestPalindrome(s2);
console.log(`Longest palindromic substring: ${result2}`);
