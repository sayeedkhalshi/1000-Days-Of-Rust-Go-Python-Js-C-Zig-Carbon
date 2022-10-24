function longestPalindromicSubstring(s) {
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return left + 1;
    }

    let start = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let left1 = expandAroundCenter(i, i);
        let right1 = expandAroundCenter(i, i + 1);

        if (right1 - left1 > maxLen) {
            maxLen = right1 - left1;
            start = left1;
        }
    }

    return s.substring(start, start + maxLen);
}

const s = "babad";
const result = longestPalindromicSubstring(s);
console.log(`Longest palindromic substring: ${result}`);
``;
