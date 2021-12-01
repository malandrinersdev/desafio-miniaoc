import re

class LettersEncoder:
    def __init__(self) -> None:
        self.lettersNumbers = {
            'a': '2',
            'b': '2',
            'c': '2',
            'd': '3',
            'e': '3',
            'f': '3',
            'g': '4',
            'h': '4',
            'i': '4',
            'j': '5',
            'k': '5',
            'l': '5',
            'm': '6',
            'n': '6',
            'o': '6',
            'p': '7',
            'q': '7',
            'r': '7',
            's': '7',
            't': '8',
            'u': '8',
            'v': '8',
            'w': '9',
            'x': '9',
            'y': '9',
            'z': '9',
            '_': '0'
        }

    def getCode(self, sentence) -> list:
        if len(sentence) == 0:
            raise ValueError("The string is empty.")
        if not re.search("^[a-z\s]+$", sentence):
            raise ValueError("The parameter is not a sequence of letters between a and z.")
        code = ""
        letters = list(sentence.replace(" ", "_"))
        for letter in letters:
            code += self.lettersNumbers[letter]
        return code

