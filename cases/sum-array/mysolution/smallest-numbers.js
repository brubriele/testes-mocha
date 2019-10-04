function sumTwoSmallestNumbers(numbers) {
   const [firstSmallest, scndSmallest] = numbers.sort((firstSmallest, scndSmallest) => firstSmallest - scndSmallest)
    return firstSmallest >= 0 && scndSmallest >= 0 && numbers != null && numbers.length > 3 ? firstSmallest + scndSmallest : 'error';
}
// console.log(Math.min(...numbers)) - não funcionou porque pega todas as ocorrências.
module.exports = sumTwoSmallestNumbers;