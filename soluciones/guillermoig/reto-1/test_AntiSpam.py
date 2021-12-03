import unittest
from AntiSpam import AntiSpam

class TestAntiSpam(unittest.TestCase):

    def setUp(self) -> None:
        self.antiSpam = AntiSpam()
        self.emailList = [
            'nombre1@hotmail.com',
            'nombre2@outlook.com',
            'nombre3@yahoo.es',
            'nombre4@hotmail.com',
            'nombre2@outlook.com',
            'nombre5@hotmail.com'
        ]
        return super().setUp()

    def test_extractDomain(self):
        # Test extractDomian method
        self.assertEqual(self.antiSpam.extractDomain("manolito.gafotas.com"), "", "Should be empty string")
        self.assertEqual(self.antiSpam.extractDomain("manolito@gafotas.com"), "gafotas.com", "Should be 'gafotas.com'")

    def test_findSmartHackers(self):
        # Test findSmartHackers method
        self.assertRaises(TypeError, self.antiSpam.findSmartHackers, "")
        self.assertRaises(ValueError, self.antiSpam.findSmartHackers, [])
        self.assertEqual(
            self.antiSpam.findSmartHackers(self.emailList),
            ['nombre1@hotmail.com', 'nombre4@hotmail.com', 'nombre5@hotmail.com'],
            "Error in returned list"
        )

if __name__ == '__main__':
    unittest.main()
