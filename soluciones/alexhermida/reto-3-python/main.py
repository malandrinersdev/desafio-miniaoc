from typing import Dict, List


def find_combinations(mobile_digits: Dict, input_digits: List[int], combinations: List, position: int, result: str =''):
    ###
    # Recursive function to iterate over the input digits with the mobile digits starting from the last one.
    ##
    if position == 0:
        combinations.append(result)
        return

    digit = input_digits[position-1]
    digit_options = mobile_digits[digit]
    options_length = len(digit_options)

    for i in range(options_length):
        find_combinations(mobile_digits, input_digits, combinations, position-1, digit_options[i] + result)


def letter_combinations(digits: int) -> List:
    digits_list = [int(d) for d in str(digits)]
    mobile_digits = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }

    combinations = []

    find_combinations(mobile_digits=mobile_digits, input_digits=digits_list, combinations=combinations, position=len(digits_list))

    return combinations


def test_letter_combinations():
    digits = 6
    assert letter_combinations(digits) == ["m", "n", "o"]


def test_letter_combinations():
    digits = 234
    assert sorted(letter_combinations(digits)) == ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh",
                                                   "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg",
                                                   "ceh", "cei", "cfg", "cfh", "cfi"]
