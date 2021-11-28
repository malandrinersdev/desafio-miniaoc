const reto = require('../reto-3')

test('null digit with result in empty string array output', () => {
    expect(reto.letterCombinations(null)).toStrictEqual(['']);
});
