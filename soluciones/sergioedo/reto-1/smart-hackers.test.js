const findSmartHackers = require("./smart-hackers")

emailsList = [
    "hola@somoshackersastutos.com",
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
    expect(findSmartHackers(emailsList)).toBe(hackersList)
})
