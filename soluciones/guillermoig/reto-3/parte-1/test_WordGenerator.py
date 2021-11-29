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

    def test_generateWordEmptyString(self):
        # Test raise exception in empty input
        self.assertRaises(ValueError, self.wordGenerator.generateWord, "")

    def test_generateWordNotSequenceOfNumbers(self):
        # Test raise exception in non sequence of numbers
        self.assertRaises(ValueError, self.wordGenerator.generateWord, "23j44")

    def test_generateWordOneLetter(self):
        self.assertEqual(self.wordGenerator.generateWord("6"), ['m', 'n', 'o'])

    def test_generateWordTwoLetters(self):
        self.assertEqual(self.wordGenerator.generateWord("23"), ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf', ])

if __name__ == '__main__':
    unittest.main()
