function XO(str) {
       let x = str.split("").sort().join("").match(/(.)\1+/gi);
       console.log(x)
       let result = x.filter((v) => {
           return v
        //    return v.length % 2 === 0
        })
        return result
}


console.log(XO('xxoobohhhH'))

module.exports = XO

// https://www.codewars.com/kata/exes-and-ohs/train/javascript