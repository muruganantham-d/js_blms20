// EX:1. Reverse a string without using built-in methods (like split, reverse, or join)

function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const reversedString = reverseString('Murugan');
console.log(reversedString);

// Key Notes:
// 1. For Loop: Iterates through the string from the last character to the first.
// 2. Concatenation: The `+=` operator Adds each character to the reversed string, building it step by step.
/* 3. Real-Time Use Case: Checking if a product code or coupon code follows a specific reverse pattern,
      or generating IDs that follow reverse logic. */



















      


// EX:2. Reverse a string without using Using Built-In Array Methods::

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Murugan')); 

// split('') ---> Splits the string into an array of characters.​
// reverse() ---> Reverses the order of elements in the array.​
// join('') --->  Joins the array elements back into a single string.​