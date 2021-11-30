from LettersEncoder import LettersEncoder

try:
    sentence = str(input("Write a sequence of words: "))
    lettersEncoder = LettersEncoder()
    print("\nThis is the sequence of numbers corresponding to those words:")
    print(lettersEncoder.getCode(sentence))
except TypeError as err:
    print("Type error: ", err)
except ValueError as err:
    print("Value error: ", err)
