//3. Count the occurrences(நிகழ்வுகள்) of each charecter in a string.

function countCharacterOccurences(str){
    const counts = {}

    for (let char of str) {  //we tack the each charecter

        if (counts[char]) {
              counts[char]++;   //ex:g:2
        }else {
              counts[char] = 1;  //first time g:1
        }
    }
    return counts;
}

const inputString = 'google'; 
const charecterCounts = countCharacterOccurences(inputString)
console.log(charecterCounts);






// for (let char of str) {
//     counts[char] = (counts[char] || 0) + 1;
// }





/*key points:::
 1. counts[char] stores the count of each character.
 1. If counts[char] exists, it adds 1.
 2. If counts[char] is undefined (first time), it sets it to 0 + 1 = 1.
 3. the for...of loop is used to iterate through each character in the string one by one. This is the best choice for counting character occurrences
  3. Why Not Use for...in??? for...in loops over object keys, not values
*/
