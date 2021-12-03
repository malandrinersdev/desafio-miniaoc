const { keyCombinations, char2Digits } = require("./key-combinations")

test("Ejemplos de carácter a digitos de teclado", () => {
    expect(char2Digits("a")).toBe("2")
    expect(char2Digits("k")).toBe("55")
    expect(char2Digits("v")).toBe("888")
    expect(char2Digits("z")).toBe("9999")
    expect(char2Digits(" ")).toBe("0")
})

test("Ejemplo simple con la frase que mola", () => {
    const text = "malo olma loma mola"
    const expectedOutput = "62555666066655562055566662066665552"
    expect(keyCombinations(text)).toEqual(expectedOutput)
})
