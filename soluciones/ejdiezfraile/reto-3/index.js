const http = require('http')
const reto = require('./reto-3')

const server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        console.log('POST')
        let body = ''
        request.on('data', function (data) {
            body += data
        })

        request.on('end', function () {
            const params = new URLSearchParams(body)
            const letters = reto.letterCombinations(params.get('digits'))
            const keys = reto.keysPressed(params.get('sentence'))
            const html = `<html>
            <body>
            <h3>Resultados:</h3>
            <ul>
                <li>Combinaciones de letras: ${letters}</li>
                <li>Combinaci&oacute;n de teclas: ${keys}</li>                
            </ul>
            </body>
        </html>`

            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end(html)
        })
    } else {
        const html = `<html>
            <body>
                <form method="post" action="http://localhost:3000">
                <h3>Dada una serie de d&iacute;gitos, mostrar todas las combinaciones posibles de letras que se pueden conseguir</h3>
                <p>Digitos: <input type="text" name="digits" /></p>
                <h3>Averiguar la combinaci&oacute;n de teclas posible para escribir la palabra clave</h3>
                <p>Frase: <input type="text" name="sentence" /></p>
                <p><input type="submit" value="Ejecutar" /> </p>
                </form>
            </body>
        </html>`
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(html)
    }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
