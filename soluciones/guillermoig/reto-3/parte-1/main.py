from WordGenerator import WordGenerator

try:
    numbers = str(input("Write a sequence of numbers: "))
    wordGenerator = WordGenerator()
    print("\nThese are the combinations with the manual method:")
    print(wordGenerator.generateWord(numbers))
except TypeError as err:
    print("Type error: ", err)
except ValueError as err:
    print("Value error: ", err)
