const http = require('http');

const server = http.createServer((request, response)=>{

    if(request.url == '/'){
        response.end("Hi There! I am the server :)");
    }
    else if(request.url =="/home"){
        response.write("Home Page :)");
        response.end();
    }
    else{
        response.end("<h3> 404 Page Not Found!!!</h3>");
    }
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to the server on port 8000. Click here http://localhost:8000/')
})