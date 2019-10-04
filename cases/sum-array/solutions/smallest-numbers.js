/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed. */

// Solutions

function sumTwoSmallestNumbersA (numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };

  function sumTwoSmallestNumbersB(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }

  const sumTwoSmallestNumbersC = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

  console.log(sumTwoSmallestNumbersC([0, 1, 4, 5]))
module.exports = sumTwoSmallestNumbersC;