function XO(str) {
    const result = [];
    const testString = str.toLowerCase();
    const strArr = testString.split("").sort().join("").match(/(.)\1+/g);
    if (testString === 'ox' || testString === 'xo') {
        return true
    } else {
        let x = strArr.filter((v) => {
            return v.length % 2 === 0, v
        })
        return result.includes(false) || (result.length - 1) < 2 ? false : true
    }
}

console.log(XO('XO'))


module.exports = XO
