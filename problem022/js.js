function generateParenthesis(n) {
    const result = [];
    generate(result, "", 0, 0, n);
    return result;
}

function generate(result, current, open, close, max) {
    if (current.length === max * 2) {
        result.push(current);
        return;
    }

    if (open < max) {
        generate(result, current + "(", open + 1, close, max);
    }
    if (close < open) {
        generate(result, current + ")", open, close + 1, max);
    }
}

const n1 = 3;
const result1 = generateParenthesis(n1);
console.log(`Generated parentheses: ${JSON.stringify(result1)}`);

const n2 = 1;
const result2 = generateParenthesis(n2);
console.log(`Generated parentheses: ${JSON.stringify(result2)}`);
