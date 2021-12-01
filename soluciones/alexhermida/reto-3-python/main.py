from typing import Dict, List

import pytest


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


def helper_char_to_keypress(mobile_digits: Dict):
    inverted_dict = {}
    for key, v in mobile_digits.items():
        for i in range(len(v)):
            n_keypress = "".join([str(key) for _ in range(i+1)])
            inverted_dict.setdefault(v[i], n_keypress)
    return inverted_dict


def find_string_keypress(input_text:str) -> int:
    mobile_digits = {
        0: [" "],
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }

    keypress_str = ""

    for char in input_text:
        keypress_dict: Dict = helper_char_to_keypress(mobile_digits)
        keypress_str += keypress_dict[char]
    return keypress_str


def test_letter_combinations():
    digits = 6
    assert letter_combinations(digits) == ["m", "n", "o"]


def test_letter_combinations():
    digits = 234
    assert sorted(letter_combinations(digits)) == ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh",
                                                   "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg",
                                                   "ceh", "cei", "cfg", "cfh", "cfi"]


@pytest.mark.parametrize(
    "input_text,expected",
    [("alex", "25553399"),
     ("malandriners", "62555266377744466337777777"),
     ("malo olma loma mola", "62555666066655562055566662066665552")
])
def test_find_string_keypress(input_text, expected):
    assert(find_string_keypress(input_text)==expected)


def test_helper_char_to_keypress():
    char_keypress = {
        "space": "0",
        "a": "2",
        "b": "22",
        "c": "222",
    }
    mobile_digits = {
        0: ["space"],
        2: ["a", "b", "c"],
    }

    assert helper_char_to_keypress(mobile_digits) == char_keypress
