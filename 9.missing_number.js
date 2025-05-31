// Find the missing number in an array containing numbers from 1 to n (array size is n-1)

// Methoad- 1. Sum Formula Method → (n * (n + 1)) / 2

function findMissingNumber(numbers) {
    const totalCount = numbers.length + 1; // Total numbers including the missing one

    /* Sum of numbers from 1 to totalCount using formula */
    const expectedSum = (totalCount * (totalCount + 1)) / 2;

    const actualSum = numbers.reduce((sum, current) => sum + current, 0);

    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5]));  // Output: 3

/*
  1. expectedSum: --→ calculates the total sum from 1 to n using the formula.
  2. actualSum: --→ uses reduce() to sum up elements of the array,
     itial value of sum (starts from 0).
  3. reduce(): --> method used to accumulate values in an array into a single result.
  4. expectedSum - actualSum: --→ gives the missing number.

*/








/** Method 2: Using "Set" to Find Missing Number **/

// function findMissingNumber(arr) {
//     const totalCount = arr.length + 1;
//     const numberSet = new Set(arr);

//     for (let i = 1; i <= totalCount; i++) {
//         if (!numberSet.has(i)) {
//             return i;
//         }
//     }
// }

// console.log(findMissingNumber([1, 2, 5]))


/* 
1. Set → A collection that stores only unique values and provides fast lookup.

2. Loop → Iterates from 1 to n and checks which number is not present in the Set.

3. !numberSet.has(i) → Returns true if the "first"  number `i` is missing from the array.
*/



// ******* If 2 or more numbers are missing, use these approaches:

function findMultipleMissingNumbers(numbers, n) {
    const numberSet = new Set(numbers);
    const missing = [];

    for (let i = 1; i <= n; i++) {
        if (!numberSet.has(i)) {
            missing.push(i);
        }
    }

    return missing;
}

console.log(findMultipleMissingNumbers([1, 3, 5, 6], 6));  // Output: [2, 4]

// .has(i) checks if the number i exists in the set.
// The loop runs while i <= n → so i will go from 1 to 6





