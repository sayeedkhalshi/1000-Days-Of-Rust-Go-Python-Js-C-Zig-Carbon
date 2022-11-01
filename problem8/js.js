function isValid(s) {
    const stack = [];
    const mapping = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (mapping[char]) {
            const topElement = stack.pop() || "#";

            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

const s1 = "()";
const result1 = isValid(s1);
console.log(`Is valid: ${result1}`);

const s2 = "()[]{}";
const result2 = isValid(s2);
console.log(`Is valid: ${result2}`);

const s3 = "(]";
const result3 = isValid(s3);
console.log(`Is valid: ${result3}`);

const s4 = "([)]";
const result4 = isValid(s4);
console.log(`Is valid: ${result4}`);

const s5 = "{[]}";
const result5 = isValid(s5);
console.log(`Is valid: ${result5}`);
