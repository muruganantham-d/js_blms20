// Method: 1 — Find the First Non-Repeating Character in a String

function firstNonRepeatingCharacter(str) {
    const frequencyMap = {};

    /* Step 1: Build frequency map */
    for (const char of str) {
        if (frequencyMap[char]) {
            frequencyMap[char] += 1;
        } else {
            frequencyMap[char] = 1;
        }
    }  // { r: 2, o: 1, v: 1, e: 1 }

    /* Log the frequency map after the first loop */
    for (const char of str) {
        if (frequencyMap[char] === 1) {
            return char;
        }
    }
    return null; 
}

console.log(firstNonRepeatingCharacter('rover'));  //First non-repeating character -> o

/* Key Notes:::
   1. frequencyMap --→ stores how many times each character appears.
   2. First loop --→ counts the frequency of each character.
   3. Second loop --→ checks the original string order to find the first char with count === 1.
   4. Time Complexity: --→ efficient solution using two passes.
   5. Returns `null` if all characters are repeating.
*/


// Method: 2 — Find the First Non-Repeating Character in a String Using Map (Maintains Insertion Order)

function firstNonRepeatingCharacter(str) {
    const map = new Map();

    /* Step 1: Store character frequencies */
    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }                            
    // Map(4) { 'r' => 2, 'o' => 1, 'v' => 1, 'e' => 1 }

    /* Step 2: Iterate over the Map (in insertion order) */
    for (const [char, count] of map.entries()) {             // [ 'o', 1 ]
        if (count === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter('rover')); // o

/* Key Notes:::
   1. (map.get(char) || 0):  --> If map.get(char) returns undefined, it uses 0 instead.
   2. map.set(char, ...) --> Updates the map by setting the new count for that character.
   3. map.entries() --> Returns an iterator with [key, value] pairs for each item in the Map.
   4. const map = new Map() Data Structure --> Used to store key-value pairs
*/













