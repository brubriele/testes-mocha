console.time("gap");
function gap(g, n, m) {
    const isPrime = num => ![...Array(num).keys()].slice(2).map(i => !(num%i)).includes(true) && ![0,1].includes(num)
    const arr = [...Array(m)].map((v, i) => {
        return v, i
    }).slice(n).filter((number) => isPrime(number))
    const diff = arr.slice(1).filter((n, i) => {
        return n - arr[i] === g
    })[0]
    return [diff -g, diff].includes(NaN) ? null : [diff -g, diff] 
}
console.log(gap(2, 250, 3010))
// console.log(gap(4, 100, 110))

console.timeEnd("gap");
module.exports = gap