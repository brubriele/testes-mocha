function XO(str) {
 
        return str.split("").sort().join("").match(/(.)\1+/gi).map((v, i) => {
            return v
        });
  

}


console.log(XO('xxoxBbooddoooox'))

module.exports = XO

// https://www.codewars.com/kata/exes-and-ohs/train/javascript