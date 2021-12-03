const combineWordWithChar = (word, character) => {
    const combinations = []
    for (let index = 0; index <= word.length; index++) {
        combinations.push(
            `${word.substring(0, index)}${character}${word.substring(index)}`
        )
    }
    return combinations
}

const generateTrollPassword = (word) => {
    if (word.length <= 1) {
        //caso base
        return [word]
    } else {
        const firstCharacter = word.substring(0, 1)
        const subWord = word.slice(1)
        const permutations = generateTrollPassword(subWord) //genera las permutaciones de la subpalabra
        return permutations
            .map((word) => {
                return combineWordWithChar(word, firstCharacter)
            })
            .flat()
    }
}

module.exports = generateTrollPassword
