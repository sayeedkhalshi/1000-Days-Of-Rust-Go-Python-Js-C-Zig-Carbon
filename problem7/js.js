function longestPalindrome(s) {
    if (s.length < 1) {
        return "";
    }

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        const palindrome1 = expandAroundCenter(i, i);
        if (palindrome1.length > longest.length) {
            longest = palindrome1;
        }

        // Even length palindrome
        const palindrome2 = expandAroundCenter(i, i + 1);
        if (palindrome2.length > longest.length) {
            longest = palindrome2;
        }
    }

    return longest;
}

const s1 = "babad";
const result1 = longestPalindrome(s1);
console.log(`Longest Palindromic Substring: ${result1}`);

const s2 = "cbbd";
const result2 = longestPalindrome(s2);
console.log(`Longest Palindromic Substring: ${result2}`);
