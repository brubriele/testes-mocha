// function XO(str) {
//     return str.toLowerCase().split('').reduce((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         return  acc
//     }, []);
// }

const XO = (str) => {
    return str.toLowerCase().split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return  acc
    }, []);
}




console.log(XO('XoXXXoo'))

// module.exports = XO

// function XO(str) {
//     for (let el in str) {
//         let re = new RegExp(str[el], "gi");
//         if (str.match(re).length % 2 != 0) {
//             return str.length / 2 === str.match(re).length ? true : false

//         }
//         return str.substr(str.match(re).length === 1)

//     }
// }


// function charTally(input) {
//     return input.split('').reduce((acc, char) => {
//       acc[char] = (acc[char] || 0) + 1;
//       return acc;
//     }, {});
//   }
// console.log(XO('Huhum'))

module.exports = XO

// https://www.codewars.com/kata/exes-and-ohs/train/javascript

// function XO(str) {

//     return str.split("").sort().join("").match(/(.)\1+/gi).map((v, i) => {
//         return v
//     });


// }