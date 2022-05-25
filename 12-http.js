const http = require('http')

const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        response.write('Welcome to our homepage!!!')
        response.end()
    }
    if(request.url === '/about'){
        response.write('Here is our short story')
        response.end()
    } else response.end(`
        <h1>Oops no pages found!!</h1>
        <p>Return to </p>
        <a href='/'> home </a>
        `)   
})

server.listen(5000)