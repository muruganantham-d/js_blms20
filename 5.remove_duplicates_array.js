//EX-1.Remove Duplicates From an array ( Using Set )

function removeDuplicate(arr) {
   return [...new Set(arr)];
}

const array = [1, 2, 3, 4, 4];
console.log(removeDuplicate(array))

/*
  1. Set ----> Set is a JavaScript object that stores only unique values.
     By passing the array to new Set(arr),duplicates are automatically filtered out.

  2. spread operator [... ] ---->  converts the Set back into an array, retaining only the unique elements.

  3. real-world Example ----> In online stores, duplicate product entries can lead to confusion and clutter.
     By eliminating duplicates, the product catalog remains clean and user-friendly
*/





  



// Example:2. Remove Duplicates From an array ( filter and indexOf );

function removeDuplicate2(arr){
   return arr.filter((val, index, self) => self.indexOf(val) == index);
}

const numArray = [5, 10, 15, 20, 20];

console.log(removeDuplicate2(numArray));

/*key notes:::

   1. filter() Method: ---> Iterates over each element in the array and includes only those
      elements that meet a specified condition.​

   2. indexOf() Method: ---> Returns the first index at which a given element is found in the array.​

   3. Combining Both: ---> For each element item at position index, arr.indexOf(item) === index checks if this
      is the first occurrence of item. If true, the element is included in the new array, effectively filtering out duplicates.

*/














// EX-3. Remove The  Duplicates From an array with ( reduce methoad )

function removeDuplicate3(arr) {

   return arr.reduce((unique, item) => {
        return  unique.includes(item) ? unique : [...unique, item];
    }, [])

}

const numArray3 = [100, 200, 300, 300];
console.log(removeDuplicate3(numArray3));

/*key notes:::

   1. reduce(): ---> method processes each element in array, accumulating a single result.
      Here, it builds a new array (unique) containing only unique elements.

   2. includes(): ---> The includes() method checks if a specific value is present in an array.
      It returns true otherwise false. 

   3. Checking Duplicates ---> unique.includes(item) checks if the current element (item) is
      already in the unique array. If it's not, the element is added; otherwise, it's skipped.
*/
