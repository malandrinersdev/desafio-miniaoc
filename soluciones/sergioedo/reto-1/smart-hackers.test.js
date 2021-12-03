const findSmartHackers = require("./smart-hackers")

emailsList = [
    "hola@somoshackersastutos.com",
    "ambrosio@outlook.com",
    "coco@malandriners.dev",
    "hello@somoshackersastutos.com",
    "ambrosio@outlook.com",
    "ciao@somoshackersastutos.com",
]

duplicatedEmailsList = [
    "hola@somoshackersastutos.com",
    "hola@somoshackersastutos.com",
    "hola@somoshackersastutos.com",
    "hola@somoshackersastutos.com",
    "ambrosio@outlook.com",
    "ambrosio@outlook.com",
    "ambrosio@outlook.com",
    "coco@malandriners.dev",
    "hello@somoshackersastutos.com",
    "ambrosio@outlook.com",
    "ciao@somoshackersastutos.com",
]

hackersList = [
    "hola@somoshackersastutos.com",
    "hello@somoshackersastutos.com",
    "ciao@somoshackersastutos.com",
]

test("Ejemplo simple con lista corta de e-mails", () => {
    expect(findSmartHackers(emailsList)).toEqual(
        expect.arrayContaining(hackersList)
    )
    expect(hackersList).toEqual(
        expect.arrayContaining(findSmartHackers(emailsList))
    )
})

test("Ejemplo complejo con lista con e-mails repetidos", () => {
    expect(findSmartHackers(duplicatedEmailsList)).toEqual(
        expect.arrayContaining(hackersList)
    )
    expect(hackersList).toEqual(
        expect.arrayContaining(findSmartHackers(duplicatedEmailsList))
    )
    expect(findSmartHackers(duplicatedEmailsList)).toHaveLength(
        hackersList.length
    )
})
