function gap(g, n, m) {
    let arr = new Array(m + 1).fill(m)
    let x = arr.map((v, i) => {
        return v, i
    }).slice(n)
    let newArr = x.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true
    })
    let diff = newArr.slice(1).filter(function (n, i) {
        return n - newArr[i] === g
    })[0]
    const flatten = (arr, depth = 1) =>
        arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
    return flatten([diff - g, diff])
}
console.log(gap(6, 100, 110))
module.exports = gap