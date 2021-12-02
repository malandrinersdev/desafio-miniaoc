const http = require('http')
const reto = require('./reto-2')

const server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        console.log('POST')
        let body = ''
        request.on('data', function (data) {
            body += data
        })

        request.on('end', function () {
            const params = new URLSearchParams(body)
            const result = reto.generateTrollPassword(params.get('word'))
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end('Result: ' + result)
        })
    } else {
        const html = `<html>
            <body>
                <form method="post" action="http://localhost:3000">
                Word: 
                    <input type="text" name="word" />
                    <input type="submit" value="Generate" />
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
