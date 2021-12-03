import pytest


from main import find_string_keypress, helper_char_to_keypress, letter_combinations


@pytest.mark.parametrize(
    "input_digits,expected",
    [(6, ["m", "n", "o"]),
     (234, ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh",
            "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"])
])
def test_letter_combinations(input_digits, expected):
    assert sorted(letter_combinations(input_digits)) == expected


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
        " ": "0",
        "a": "2",
        "b": "22",
        "c": "222",
    }
    mobile_digits = {
        0: [" "],
        2: ["a", "b", "c"],
    }

    assert helper_char_to_keypress(mobile_digits) == char_keypress
