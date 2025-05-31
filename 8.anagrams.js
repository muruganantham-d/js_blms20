//Methoad- 1. Write a function to check if two strings are anagrams

/*  -> An anagram means two words have the same letters, used the same number of times,
       just in a different order.  */

function checkAnagram(str1, str2) {
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    /* Check if the lengths are different */
    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyMap1 = {};     // { a: 1, n: 1, g: 1, e: 1, l: 1 }
    const frequencyMap2 = {};     // { g: 1, l: 1, e: 1, a: 1, n: 1 }

    for (const char of str1) {
        frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
    }

    for (const char of str2) {
        frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
    }

    for (const char in frequencyMap1) {
        if (frequencyMap1[char] !== frequencyMap2[char]) {
            return false;
        }
    }

    return true;
}

console.log(checkAnagram('angel', 'glean')); // true

/*
 1. frequencyMap[char] = , ---→ creating a key in an object (map) for each character.
    (map[char] || 0) + 1   ---→ creates a character frequency count.
 2. Same letters, same counts ---→ So they are anagrams.
 3. (frequencyMap1[char] !== frequencyMap2[char]) ---> Compares each character's count in both maps if any mismatch,
     they're not anagrams.
 4. for in ---->Why it works here: Objects are not iterable with for...of,
    but for...in can be used to loop through their keys.
*/






// Method 2 – Check if Two Strings Are Anagrams (Using Sort)

// function checkAnagramUsingSort(str1, str2) {
//     str1 = str1.replace(/\s+/g, '').toLowerCase();
//     str2 = str2.replace(/\s+/g, '').toLowerCase();

//     /* If lengths are different, not anagram */
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     /* Sort both strings and compare */
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }

// console.log(checkAnagramUsingSort('angel', 'glean')); // true

/* Key Notes:
   1. split('') — splits the string into an array of characters.

   2. sort() — sorts the characters alphabetically.

   3. join('') — joins the sorted characters back into a string.

   4. Sorted comparison — If both sorted strings are equal → they are anagrams.

   5. Simpler logic — but uses extra time for sorting.
*/
















