//EX:1, Find the longest word in a string

function findLongestWord(sentence) {

    const words = sentence.split(' ');  //['Hi,','my','name','is','Murugan']

    let longestWord = '';
    
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("Hi, my name is Murugan"));

/*key notes::
  1. split(' ') --->  method divides the sentence into an array of words using a space as the delimiter.
  2. longestWord ---> variable is set to an empty string to keep track of the longest word found during iteration.
  3. for...of loop ---> examines each word in the array. If a word's length exceeds that of longestWord,
     it becomes the new longestWord. 
*/




//EX:2, Both longest and Sortest;;

function findLongestAndShortestWord(sentence) {
    const words = sentence.split(' ').map(word => word.replace(/[^\w]/g, '')); // Remove punctuation

    let longestWord = '';
    let shortestWord = words[0] || '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        if (word.length < shortestWord.length && word.length > 0) {
            shortestWord = word;
        }
    }

    return {
        longestWord,
        shortestWord
    };
}

const result = findLongestAndShortestWord("Hi, my name is Murugan");
console.log("Longest Word:", result.longestWord);
console.log("Shortest Word:", result.shortestWord);











//EX:2, Find the longest word in a string ( using sort() Method )

function findLongestWord(sentence) {

    const words = sentence.split(' '); // [ 'Hi,', 'my', 'name', 'is', 'Murugan' ]

    const sortedWords = words.sort((a, b) => b.length - a.length); //[ 'Murugan', 'name', 'Hi,', 'my', 'is' ]

    return sortedWords[0];
}

    console.log(findLongestWord("Hi, my name is Murugan"));

/*key notes:::
  1. split(' ') ---> method divides the sentence into an array of words using a space as the delimiter.
  2. sort((a, b) => b.length - a.length) ---> Orders the array of words from longest to
     shortest based on word length.
  3. sortedWords[0] --->  longest word is accessed as the first element of the array
     using sortedWords[0].
 */