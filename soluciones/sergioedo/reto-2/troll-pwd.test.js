const generateTrollPassword = require("./troll-pwd")

test("Ejemplo simple con palabra de 1 letra", () => {
    expect(generateTrollPassword("a")).toEqual(["a"])
})

test("Ejemplo simple con palabra de 2 letras", () => {
    expect(generateTrollPassword("ab")).toEqual(
        expect.arrayContaining(["ab", "ba"])
    )
    expect(["ab", "ba"]).toEqual(
        expect.arrayContaining(generateTrollPassword("ab"))
    )
})

const seedWord = "abc"
const expectedPermutations = ["abc", "acb", "bac", "cab", "bca", "cba"]

test("Ejemplo simple con palabra de 3 letras", () => {
    expect(generateTrollPassword(seedWord)).toEqual(
        expect.arrayContaining(expectedPermutations)
    )
    expect(expectedPermutations).toEqual(
        expect.arrayContaining(generateTrollPassword(seedWord))
    )
    expect(generateTrollPassword(seedWord)).toHaveLength(
        expectedPermutations.length
    )
})

const complexSeedWord = "mAdr3M1a"
const someExpectedPermutations = [
    complexSeedWord,
    complexSeedWord.split("").reverse().join(""),
    "mMAdr13a",
]

test("Ejemplo complejo con números y mayúsculas de 8 letras", () => {
    expect(generateTrollPassword(complexSeedWord)).toEqual(
        expect.arrayContaining(someExpectedPermutations)
    )
})
