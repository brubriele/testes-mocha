// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeqA = length => Array.from({
    length
}, () => length--)

const reverseSeqB = n => {
    return Array.from({
        length: n
    }, (_, i) => n - i);
};

const reverseSeqC = n => Array(n).fill(0).map((_, i) => n - i);