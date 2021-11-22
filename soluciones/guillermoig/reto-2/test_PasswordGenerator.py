import unittest
from PasswordGenerator import PasswordGenerator

class TestPasswordGenerator(unittest.TestCase):

    def setUp(self) -> None:
        self.pwdGenerator= PasswordGenerator("ama")
        return super().setUp()

    def test_init(self):
        # Test object cration
        self.assertRaises(TypeError, PasswordGenerator, 23)
        self.assertRaises(TypeError, PasswordGenerator, [])
        self.assertRaises(ValueError, PasswordGenerator, "")

    def test_addCharToListItems(self):
        # Test addCharToListItems method
        self.assertEqual(self.pwdGenerator.addCharToListItems(['ab', 'ba'], 'c'), ['cab', 'abc', 'cba', 'bac'], "Error in method")

    def test_generateTrollPasswordEasy(self):
        # Test generateTrollPasswordEasy method
        self.assertEqual(self.pwdGenerator.generateTrollPasswordEasy(), ['aam', 'ama', 'maa'], "Incorrect list")

    def test_generateTrollPassword(self):
        # Test generateTrollPassword method
        self.assertEqual(self.pwdGenerator.generateTrollPassword(), ['aam', 'ama', 'maa'], "Incorrect list")

if __name__ == '__main__':
    unittest.main()
