//Ex:2 - Check if a string is a palindrome.

/* A palindrome is a word, phrase, or sequence that reads the same backward as forward.
   Examples: radar, level, madam */

function isPalindrome(str) {
    function reverseString(s) {
        let reversed = '';

        /** Loop through the string in reverse **/
        for (let i = s.length - 1; i >= 0; i--) {
            reversed += s[i];              //reversed = reversed + s[i];
        }
        return reversed;
    }
    const cleanedStr = str.toLowerCase();
    return cleanedStr === reverseString(cleanedStr);
}

console.log(isPalindrome('level'));  //L=1,2,3,4,5 - 1 :: = 0 to 4


/* 1. let i = s.length ------> In JavaScript (and most programming languages),
      string indices start at 0.
   2. reversed += s[i] ------> adds that character to the reversed string
*/

// EX:1. Check if a string is a palindrome.

//    function isPalindrome(str) {
//     const cleanedStr = str.toLowerCase();
//     const reversed = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversed;
// }

// console.log(isPalindrome('level'));

// Split: --->  Breaks the string into an array of characters.
// Reverse:  ---> Reverses the array of characters.
// Join:  --->  Joins the array back into a string.
/* real-time scenarios:  --->  an e-commerce store, a palindrome check might be used to ensure a
 product ID or a discount code is valid or follows a specific rule */