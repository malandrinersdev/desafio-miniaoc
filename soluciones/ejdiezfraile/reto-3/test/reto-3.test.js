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

test('digit 23 with result in 9 combinations', () => {
    expect(reto.letterCombinations(23)).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});

test('digit 234 with result in 27 combinations', () => {
    expect(reto.letterCombinations(234)).toStrictEqual([
        'adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 
        'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 
        'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi']);
});