const fs = require('fs');
const http = require('http');


const server = http.createServer((request, response)=>{

    const data = fs.readFileSync(`groceries.json` , 'utf-8' );
        const value = JSON.parse(data);

    if(request.url == '/'){
        response.end("Hi There! I am the server :)");
    }
    else if(request.url =="/home"){
        response.write("Home Page :)");
        response.end();
    }
    else if(request.url == '/groceries'){
            console.log(value[1].count);
            response.end((value[0].count).toString());
    }
    else{
        response.end(" <h1> 404 Page Not Found!!! </h1>");
    }
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to the server on port 8000. Click here http://localhost:8000/')
})