
const digitMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': [' ']
}

function letterCombinations(digits) {
    // Convert to string
    digits = '' + (digits || '')

    // Zero or One char length (base case)
    if (digits.length <= 1) {
        // Empty array if undefined
        return (digitMap[digits.charAt(0)] || [])
    }

    // f(n) = f(char(0)) + f(char(1..n)) 
    const outputFirst = letterCombinations(digits.charAt(0))
    const outputOthers = letterCombinations(digits.substring(1))

    // Combine both outputs (first + others until the end)
    const combinedOutput = []
    outputFirst.forEach(itemFromFirst => {
        outputOthers.forEach(itemFromOthers => {
            combinedOutput.push(itemFromFirst + itemFromOthers)
        })
    });
    return combinedOutput
}

function keysPressed(sentence) {
    const letters = sentence.split('')

    // Iterate over digitMap keys to find every letter
    return letters.flatMap(letter =>
        Object.keys(digitMap)
            .filter(digit =>
                digitMap[digit]
                    .find(char => char === letter)))
}

exports.letterCombinations = letterCombinations;
exports.keysPressed = keysPressed;