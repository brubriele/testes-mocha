function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

//   const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
//   }

console.log(XO('XxoO'))

// let str = ""
// console.log(str != "" ? true : false)
module.exports = XO