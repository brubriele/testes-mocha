const chai = require('chai');
const expect = chai.expect;
const XO = require('../cases/exes-and-ohs/exes-ohs');

describe('Pair XO', () => {
    describe('Pares em lowercase', () => {
        it('Strings lowercase com pares equivalentes (x,o) - deve retonar: true', () => {
            expect(XO('xoox')).to.eql(true)
        });
        it('Strings lowercase com pares equivalentes (x, o) - deve retornar: true', () => {
            expect(XO('xxoo')).to.eql(true)
        });
        it('Strings lowercase com pares não equivalentes (x, o) - deve retornar: false', () => {
            expect(XO('xxxoo')).to.eql(false)
        });
    });
    
    describe('Pares sensitive', () => {
        it('Strings sensitive com pares não equivalentes (x, O || O, x) - deve retornar: false', () => {
            expect(XO('XoXOO')).to.eql(false)
        });
        it('Strings sensitive com pares equivalentes (x, O || O, x) - deve retornar: true', () => {
            expect(XO('XoXOXO')).to.eql(false)
        });
    });

    describe('Pares sort', () => {
        it('Strins com pares equivalentes e variação de "x" ou "o" - deve retornar: true', () => {
            expect(XO(ZBzBbbZz)).to.eql(true)
        });
        it('Strins com pares não equivalentes e variação de "x" ou "o" - deve retornar: true', () => {
            expect(XO(ZBzBBbbZz)).to.eql(false)
        });
        
    })
});