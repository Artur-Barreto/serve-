const http = require('http')

const server = http.createServer((req, res) => {
    const resposta = []
    resposta['/'] = '<h1>Home</h1>'
    resposta['/contato'] = '<h1>Contato</h1>'
    resposta['semURL'] = '<h1>URL sem reposta definida!</h1>'

    res.end(resposta[res.url] || resposta['SemURL'])
})

server.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: http://localhost:3001')
    console.log('Pra desligar o servidor: Ctrl + c')

})