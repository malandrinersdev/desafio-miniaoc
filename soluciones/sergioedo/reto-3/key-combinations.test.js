const keyCombinations = require("./key-combinations")

test("Ejemplo simple con la frase que mola", () => {
    const text = "malo olma loma mola"
    const expectedOutput = "62555666066655562055566662066665552"
    expect(keyCombinations(text)).toEqual(expectedOutput)
})
