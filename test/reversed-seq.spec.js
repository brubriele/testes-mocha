const chai = require('chai');
const expect = chai.expect;
const reverseSeq = require('../cases/reversed-sequence/reversed-seq');

describe('Reverse numbers', () => {
    describe('Reverse iniciado em ímpar', () => {
        it('Para n = 5 - deve retornar: [5, 4, 3, 2, 1]', () => {
            expect(reverseSeq(5)).to.eql([5, 4, 3, 2, 1])
        });
        it('Para n = 7 - deve retornar: [7, 6, 5, 4, 3, 2, 1]', () => {
            expect(reverseSeq(7)).to.eql([7, 6, 5, 4, 3, 2, 1])
        });
        it('Para n= 1 - deve retornar: [1]', () => {
            expect(reverseSeq(1)).to.eql([1])
        });
    });
    describe('Reverse iniciado em par', () => {
        it('Para n = 12 - deve retornar: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
            expect(reverseSeq(12)).to.eql([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
        });
        it('Para n = 8 - deve retonar: [8, 7, 6, 5, 4, 3, 2, 1]', () => {
            expect(reverseSeq(8)).to.eql([8, 7, 6, 5, 4, 3, 2, 1])
        });
    })
})