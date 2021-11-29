const digit2Chars = {
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

const letterCombinations = (digits) => {
    digitsArray = digits.toString().split("")
    if (digitsArray.length === 1) {
        return digit2Chars[digitsArray[0]]
    } else {
        const firstDigit = digitsArray[0]
        const subDigits = digitsArray.slice(1).join("")
        const firstDigitChars = digit2Chars[firstDigit]
        const subCombinations = letterCombinations(subDigits)
        return firstDigitChars
            .map((char) => {
                return subCombinations.map((subCombination) => {
                    return char + subCombination
                })
            })
            .flat()
    }
}

module.exports = {
    letterCombinations,
    digit2Chars,
}
