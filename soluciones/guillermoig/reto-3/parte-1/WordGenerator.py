import re

class WordGenerator:
    def __init__(self) -> None:
        self.numberLetters = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z'],
        }

    def translateNumbersToLetters(self, numberSequence) -> list:
        splittedNumberSequence = list(numberSequence)
        translatedNumbers = []
        for number in splittedNumberSequence:
            translatedNumbers.append(self.numberLetters[number])
        return translatedNumbers

    def concatCharArray(self, char, array) -> list:
        result = []
        for item in array:
            result.append(char + item)
        return result

    def getWords(self, sequence) -> set:
        words = []
        tempSequence = sequence.copy()
        if len(tempSequence)  == 1:
            return tempSequence[0]
        firstGroup = tempSequence.pop(0)
        for letter in firstGroup:
            words += self.concatCharArray(letter, self.getWords(tempSequence))
        return words

    def letterCombinations(self, numberSequence) -> set:
        if len(numberSequence) == 0:
            raise ValueError("The string is empty.")
        if not re.search("^[2-9]+$", numberSequence):
            raise ValueError("The parameter is not a sequence of numbers between 2 and 9.")
        translatedSequence = self.translateNumbersToLetters(numberSequence)
        return self.getWords(translatedSequence)

