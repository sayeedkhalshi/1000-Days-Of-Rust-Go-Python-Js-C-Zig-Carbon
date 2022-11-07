function combinationSum2(candidates, target) {
    const result = [];
    const current = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start, target) {
        if (target === 0) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue; // Skip duplicates
            }
            if (candidates[i] > target) {
                break;
            }
            current.push(candidates[i]);
            backtrack(i + 1, target - candidates[i]);
            current.pop();
        }
    }

    backtrack(0, target);
    return result;
}

const candidates1 = [10, 1, 2, 7, 6, 1, 5];
const target1 = 8;
const result1 = combinationSum2(candidates1, target1);
console.log(`Combinations: ${JSON.stringify(result1)}`);

const candidates2 = [2, 5, 2, 1, 2];
const target2 = 5;
const result2 = combinationSum2(candidates2, target2);
console.log(`Combinations: ${JSON.stringify(result2)}`);
