from itertools import permutations

class PasswordGenerator:
    def __init__(self, word) -> None:
        if not isinstance(word, str):
            raise TypeError("The parameter is not a string.")
        if len(word) == 0:
            raise ValueError("The string is empty.")
        self.word = word

    def addCharToListItems(self, itemList, char) -> list:
        newItemList = []
        for item in itemList:
            newItemList.append(char + item)
            newItemList.append(item + char)
        return newItemList

    def generateTrollPasswordEasy(self) -> set:
        passwordSet = [''.join(p) for p in permutations(self.word)]
        return sorted(set(passwordSet))

    def passwordGenerator(self, word) -> set:
        passwordSet = []
        splittedWord = word
        length = len(splittedWord)
        if length == 2:
            char = splittedWord.pop(0)
            passwordSet = self.addCharToListItems(splittedWord, char)
            passwordSet = self.addCharToListItems(splittedWord, char)
            return passwordSet
        for i in range(length):
            subWord = list(splittedWord)
            char = subWord.pop(i)
            subSet = self.passwordGenerator(subWord)
            passwordSet.extend(self.addCharToListItems(subSet, char))
        if length < len(self.word):
            return passwordSet
        return sorted(set(passwordSet))

    def generateTrollPassword(self) -> set:
        return self.passwordGenerator(self.word)

