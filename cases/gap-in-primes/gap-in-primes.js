function gap (g, n, m) {
    //Construct array inital/final
    let arr = new Array(m + 1).fill(m)
    let x = arr.map((v, i) => {
        return v, i
    }).slice(n)
    // console.log(x)

    //To verify primes
    // console.log(x)
    // return x.map((v, i) => {
    //     // return v % 2 === 0
    //     return Math.sqrt(v)
    // })

    return x.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i === 0) return false;
        }
        return true
    })
}
console.log(gap(2, 10, 21))

