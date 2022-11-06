function longestValidParentheses(s) {
    const stack = [-1];
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (c === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
}

const s1 = "(()";
const result1 = longestValidParentheses(s1);
console.log(`Longest valid parentheses: ${result1}`);

const s2 = ")()())";
const result2 = longestValidParentheses(s2);
console.log(`Longest valid parentheses: ${result2}`);
