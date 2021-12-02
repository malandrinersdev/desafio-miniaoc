const reto = require('../reto-2')

test('null word with result in empty string output', () => {
    expect(reto.generateTrollPassword(null)).toStrictEqual(['']);
});

test('word with a single letter should result in the word itself', () => {
    expect(reto.generateTrollPassword('a')).toStrictEqual(['a']);
});

test('word with two letters should result in 2 words', () => {
    expect(reto.generateTrollPassword('ab')).toStrictEqual(['ab', 'ba']);
});

test('word with three letters should result in 6 words', () => {
    expect(reto.generateTrollPassword('abc')).toStrictEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
});