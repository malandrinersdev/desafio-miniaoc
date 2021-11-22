from PasswordGenerator import PasswordGenerator

try:
    word = str(input("Write a word: "))
    pwdGenerator = PasswordGenerator(word)
    print("\nThese are the permutations with the easy method:")
    print(pwdGenerator.generateTrollPasswordEasy())
    print("\nThese are the permutations with the manual method:")
    print(pwdGenerator.generateTrollPassword())
except TypeError as err:
    print("Type error: ", err)
except ValueError as err:
    print("Value error: ", err)
