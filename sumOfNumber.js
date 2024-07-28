function sumOfNumber(number) {
    number = +number;
    if (number === 0) {
      return 0;
    }
    return number % 10 + sumOfNumber(Math.floor(number / 10));
  }
  
  module.exports = sumOfNumber;
