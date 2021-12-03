const { digit2Chars } = require("./letter-combinations")

const _char2Digits = {}

Object.keys(digit2Chars).map((digit) => {
    digit2Chars[digit].map((char, index) => {
        _char2Digits[char] = digit.toString().repeat(index + 1)
    })
})

const char2Digits = (char) => _char2Digits[char]

const keyCombinations = (text) => {
    return text
        .split("")
        .map((char) => {
            return char2Digits(char)
        })
        .join("")
}

module.exports = { keyCombinations, char2Digits }
