const reto = require('../reto-3')

test('null digit with result in an empty array output', () => {
    expect(reto.letterCombinations(null)).toStrictEqual([]);
});

test('no valid digit with result in an empty array output', () => {
    expect(reto.letterCombinations(1)).toStrictEqual([]);
});


test('digit 6 with result m, n, o', () => {
    expect(reto.letterCombinations(6)).toStrictEqual(['m', 'n', 'o']);
});

test('digits 23 with result in 9 combinations', () => {
    expect(reto.letterCombinations(23)).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});

test('digits 234 with result in 27 combinations', () => {
    expect(reto.letterCombinations(234)).toStrictEqual([
        'adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 
        'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 
        'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi']);
});


test('sentence "m "  result in 6, 0', () => {
    expect(reto.keysPressed('m ')).toStrictEqual(['6', '0']);
});

test('sentence "malo olma loma mola" result in reto solution', () => {
    expect(reto.keysPressed('malo olma loma mola')).toStrictEqual(
        ['6', '2', '5', '6', '0', '6', '5', '6', '2', '0', '5', '6', '6', '2', '0', '6', '6', '5', '2']);
});