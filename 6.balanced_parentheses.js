// Method: 1 — Check if a String Contains Balanced Parentheses

function isBalanced(str) {
    const stack = [];

    for (const char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("(()"));

/*Key Notes:::
   1. push() ---→ adds an opening bracket to the stack.
   2. pop()  ---→ removes the last added opening bracket when a closing one is found.
   3. for...of loop ---→ used to iterate over each character in the string.
 */




// Method: 2 — Check if a String Contains Balanced Parentheses Using a "Counter" (Only for () type)

// function isBalanced(str) {
//     let count = 0;

//     for (const char of str) {
//         if (char === '(') {
//             count++;
//         } else if (char === ')') {
//             count--;
//             if (count < 0) return false;
//         }
//     }

//     return count === 0;
// }

// console.log(isBalanced("(())")); 

/* Key Notes:::
   1. count++ :  → when an opening bracket '(' is found.
   2. count-- :  → when a closing bracket ')' is found.
   3. If count becomes negative :  → it means there’s an unmatched closing bracket.
   4. Final check : →  if count is 0, parentheses are balanced.
   5. Simple and efficient :  → but works only for round brackets ().
*/




// Method: 3 — Check if String Contains Balanced Parentheses, Stack with All Bracket Types ((), {}, []).
function isBalanced(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("{[()]}"));

/* Key Notes:::
   1. `pairs`: --→ object maps each closing bracket to its correct opening bracket.
   2. `stack.push(): --→ adds opening brackets to the stack.
   3. `stack.pop()`:  --→ removes and checks if the last opening bracket matches the current closing one.
   4. If stack is empty at the end:  --→ all brackets were properly closed and nested.
*/











