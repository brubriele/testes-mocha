const reverseSeq = n => {
    let arrayN = new Array(n).fill(n).map( (v, i) => {
        return i + 1
    });
    return arrayN.reverse()

}
console.log(reverseSeq(9))

module.exports = reverseSeq