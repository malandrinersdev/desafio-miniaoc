import unittest
from WordGenerator import WordGenerator

class TestWordGenerator(unittest.TestCase):

    def setUp(self) -> None:
        self.wordGenerator= WordGenerator()
        return super().setUp()

    def test_translateNumbersToLettersOneNumber(self):
        self.assertEqual(self.wordGenerator.translateNumbersToLetters("2"), [['a', 'b', 'c']])

    def test_translateNumbersToLettersTwoNumbers(self):
        self.assertEqual(self.wordGenerator.translateNumbersToLetters("23"), [['a', 'b', 'c'], ['d', 'e', 'f']])

    def test_concatCharArrayOneLetter(self):
        self.assertEqual(self.wordGenerator.concatCharArray('a', ['m', 'n', 'o']), ['am', 'an', 'ao'])

    def test_concatCharArrayTwoLetters(self):
        self.assertEqual(self.wordGenerator.concatCharArray('a', ['dg', 'dh', 'di']), ['adg', 'adh', 'adi'])

    def test_letterCombinationsEmptyString(self):
        # Test raise exception in empty input
        self.assertRaises(ValueError, self.wordGenerator.letterCombinations, "")

    def test_letterCombinationsNotSequenceOfNumbers(self):
        # Test raise exception in non sequence of numbers
        self.assertRaises(ValueError, self.wordGenerator.letterCombinations, "23j44")

    def test_letterCombinationsOneLetter(self):
        self.assertEqual(self.wordGenerator.letterCombinations("6"), ['m', 'n', 'o'])

    def test_letterCombinationsTwoLetters(self):
        self.assertEqual(self.wordGenerator.letterCombinations("23"), ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])

    def test_letterCombinationsThreeLetters(self):
        self.assertEqual(self.wordGenerator.letterCombinations("234"), ['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi'])

if __name__ == '__main__':
    unittest.main()
