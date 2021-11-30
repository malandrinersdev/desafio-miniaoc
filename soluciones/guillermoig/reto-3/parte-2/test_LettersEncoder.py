import unittest
from LettersEncoder import LettersEncoder

class TestLettersEncoder(unittest.TestCase):

    def setUp(self) -> None:
        self.lettersEncoder = LettersEncoder()
        return super().setUp()

    def test_getCodeEmptyString(self):
        # Test raise exception in empty input
        self.assertRaises(ValueError, self.lettersEncoder.getCode, "")

    def test_getCodeNotSequenceOfLettersOrWhiteSpace(self):
        # Test raise exception in non sequence of numbers
        self.assertRaises(ValueError, self.lettersEncoder.getCode, "jf56op")

    def test_getCodeOneLetter(self):
        self.assertEqual(self.lettersEncoder.getCode('m'), '6')

    def test_getCodeOneWord(self):
        self.assertEqual(self.lettersEncoder.getCode('hola'), '4652')

    def test_getCodeSomeWords(self):
        self.assertEqual(self.lettersEncoder.getCode('malo olma loma mola'), '6256065620566206652')

if __name__ == '__main__':
    unittest.main()
