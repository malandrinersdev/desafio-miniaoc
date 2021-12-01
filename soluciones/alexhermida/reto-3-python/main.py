from typing import Dict, List


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


def find_combinations(
    mobile_digits: Dict,
    input_digits: List[int],
    combinations: List,
    position: int,
    result: str = "",
):
    ###
    # Recursive function to iterate over the input digits with the mobile digits starting from the last one.
    ##
    if position == 0:
        combinations.append(result)
        return

    digit = input_digits[position - 1]
    digit_options = mobile_digits[digit]
    options_length = len(digit_options)

    for i in range(options_length):
        find_combinations(
            mobile_digits,
            input_digits,
            combinations,
            position - 1,
            digit_options[i] + result,
        )


def letter_combinations(digits: int) -> List[str]:
    digits_list = [int(d) for d in str(digits)]
    combinations: List[str] = []

    find_combinations(
        mobile_digits=mobile_digits,
        input_digits=digits_list,
        combinations=combinations,
        position=len(digits_list),
    )

    return combinations


def helper_char_to_keypress(mobile_digits: Dict):
    keypress_dict: Dict[str, str] = {}
    for key, v in mobile_digits.items():
        for i in range(len(v)):
            n_keypress = "".join([str(key) for _ in range(i + 1)])
            keypress_dict.setdefault(v[i], n_keypress)
    return keypress_dict


def find_string_keypress(input_text: str) -> str:
    keypress_str = ""

    for char in input_text:
        keypress_dict: Dict = helper_char_to_keypress(mobile_digits)
        keypress_str += keypress_dict[char]

    return keypress_str


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--letter_combinations",
        action="store_true",
        help="Dada una serie de dígitos, mostrar todas \
                        las combinaciones posibles de letras que se pueden conseguir.",
    )
    parser.add_argument(
        "--find_string_keypress",
        action="store_true",
        help="Averiguar la combinación de teclas posible data una frase",
    )
    args = parser.parse_args()

    if args.letter_combinations:
        digits = int(
            input(
                "Introduce los dígitos, del 2 al 9, para obtener las combinaciones posibles:"
            )
        )
        print(letter_combinations(digits))

    elif args.find_string_keypress:
        keypress = input(
            "Introduce una frase y obten las pulsaciones de teclas requeridas en un móvil malandriner:"
        )
        print(find_string_keypress(keypress))
