// Method 1: Function to flatten a deeply nested array into a single-level array

function flattenArray(arr) {
    let result = [];

    for (const item of arr) {
      console.log(item,"items")
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

const nestedArray = [1, [2, [3, 4], 5], 6, [7, [8, 9]], 10];

console.log(flattenArray(nestedArray));

/* Key Notes:
  1. for...of --→ Loops through each item in the array.

  2. Array.isArray(item) --→ Checks if the current item is an array.

  3. concat(flattenArray(item)) --→ Recursively flattens nested arrays.

  4. push(item) --→ Adds non-array elements to the final result.

  5. why use const ----> It's a new constant binding every time,
     not the same variable being reassigned.
*/






// Method 2: Using .flat(Infinity) (Modern JavaScript Built-in Method)

// const nestedArray = [1, [2, [3, 4], 5], 6, [7, [8, 9]], 10, ,];

// const flatArray = nestedArray.flat(Infinity);

// console.log(flatArray);

/*
  1. .flat(depth) —--> Flattens an array up to the specified depth.

  2. Infinity —--> Ensures all levels of nesting are flattened.

  3. Modern and efficient —--> Recommended in 2025 for readability and performance.

  4. Empty slots like , , --->  are automatically ignored.
*/












// Method 3: Iterative Stack-Based Flattening (Large Data Example)

// function flattenIterative(input) {
//     const stack = [...input];   // Step 1: Initialize stack with array
//     const result = [];

//     while (stack.length) {      // Step 3: Keep processing until stack is empty
//         const next = stack.pop(); // Step 4: Take last item from the stack

//         if (Array.isArray(next)) {
//             stack.push(...next);
//             // Example: If next = [2, [3, 4], 5], then
//             // stack.push(...next) → stack becomes [..., 2, [3, 4], 5]
//         } else {
//             result.push(next);  // Step 6: If it's a number, add to result
//         }
//     }

//     return result.reverse();
// }

// const nested = [1, [2, [3, 4], 5], 6];

// console.log(flattenIterative(nested));

/* Key Notes:::
   1. stack.pop() → Removes and returns the last element of the stack (LIFO).

   2. Array.isArray(next) → Checks if the current item is an array before processing.

  3. stack.push(...next) → Unpacks and adds sub-array items to the stack (preserves order).

  4. result.reverse() → Fixes the order because elements are processed in reverse using .pop().

  5. while  ---> Use when data is changing dynamically (like with stack.push() or stack.pop() during looping),
     Better than "for" or "for...of" when iteration count is not fixed.
*/






































