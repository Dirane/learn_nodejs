
const swapDigits = (number) => {
    let swappedNumber = 0;
    let digit1;
    let digit2;
    let count = 0;
  
    // Check if the number of digits is even
    if (number.toString().length % 2 === 0) {
      // Loop through the digits of the number and swap the alternate digits
      while (number > 0) {
        digit1 = number % 10;
        number = Math.floor(number / 10);
        digit2 = number % 10;
        number = Math.floor(number / 10);
  
        // Add the swapped digits to the swapped number
        swappedNumber += digit2 * Math.pow(10, count);
        swappedNumber += digit1 * Math.pow(10, count + 1);
  
        count += 2;
      }
    } else {
      // If the number of digits is odd, only swap the alternate digits starting from the second digit
      while (number > 0) {
        digit1 = number % 10;
        number = Math.floor(number / 10);
        digit2 = number % 10;
        number = Math.floor(number / 10);
  
        // Add the swapped digits to the swapped number
        if (count % 2 === 0) {
          swappedNumber += digit2 * Math.pow(10, count);
          swappedNumber += digit1 * Math.pow(10, count + 1);
        } else {
          swappedNumber += digit1 * Math.pow(10, count);
          swappedNumber += digit2 * Math.pow(10, count + 1);
        }
  
        count += 1;
      }
    }
  
    return swappedNumber;
  };  

module.exports = swapDigits
