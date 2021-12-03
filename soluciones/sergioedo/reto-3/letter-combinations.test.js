const { letterCombinations } = require("./letter-combinations")

const expectSameElements = (array1, array2) => {
    expect(array1).toEqual(expect.arrayContaining(array2))
    expect(array2).toEqual(expect.arrayContaining(array1))
    expect(array1).toHaveLength(array2.length)
}

test("Ejemplo simple con el dígito 6", () => {
    expectSameElements(letterCombinations(6), ["m", "n", "o"])
})

test("Ejemplo 3 dígitos", () => {
    const digits = "234"
    const expectedOutput =
        "adg, adh, adi, aeg, aeh, aei, afg, afh, afi, bdg, bdh, bdi, beg, beh, bei, bfg, bfh, bfi, cdg, cdh, cdi, ceg, ceh, cei, cfg, cfh, cfi".split(
            ", "
        )
    expectSameElements(letterCombinations(digits), expectedOutput)
})
