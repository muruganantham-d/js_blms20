// Convert an integer to a Roman numeral

function convertToRoman(number) {

     const romanNumerals = [
          { value: 1000, numeral: 'M' },
          { value: 900, numeral: 'CM' },
          { value: 500, numeral: 'D' },
          { value: 400, numeral: 'CD' },
          { value: 100, numeral: 'C' },
          { value: 90, numeral: 'XC' },
          { value: 50, numeral: 'L' },
          { value: 40, numeral: 'XL' },
          { value: 10, numeral: 'X' },
          { value: 9, numeral: 'IX' },
          { value: 5, numeral: 'V' },
          { value: 4, numeral: 'IV' },
          { value: 1, numeral: 'I' },
     ];

     let result = '';

     for (let i = 0; i < romanNumerals.length; i++) {
          const { value, numeral } = romanNumerals[i];

          // Append the Roman numeral while it fits into the remaining number
          while (number >= value) {
               result += numeral;
               number -= value;
          }
     }

     return result;
}

console.log(convertToRoman(2025));  //MMXXV
