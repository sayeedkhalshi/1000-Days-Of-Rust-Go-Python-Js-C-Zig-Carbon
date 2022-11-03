function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let start = 0;
    const charIndices = new Array(128).fill(0);

    for (let i = 0; i < s.length; i++) {
        const c = s[i].charCodeAt(0);

        if (charIndices[c] > start) {
            start = charIndices[c];
        }
        charIndices[c] = i + 1;

        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
}

const s1 = "abcabcbb";
const result1 = lengthOfLongestSubstring(s1);
console.log(`Length of Longest Substring: ${result1}`);

const s2 = "bbbbb";
const result2 = lengthOfLongestSubstring(s2);
console.log(`Length of Longest Substring: ${result2}`);

const s3 = "pwwkew";
const result3 = lengthOfLongestSubstring(s3);
console.log(`Length of Longest Substring: ${result3}`);
