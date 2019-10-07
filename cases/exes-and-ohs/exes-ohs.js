function XO(str) {
    for (let el in str) {
        let re = new RegExp(str[el], "gi");
        // if (str.match(re).length % 2 != 0) {
        //     return str.length / 2 === str.match(re).length ? true : false
            
        // }
        return str.substr(str.match(re).length === 1)

    }
}

console.log(XO('Huhum'))

module.exports = XO

// https://www.codewars.com/kata/exes-and-ohs/train/javascript