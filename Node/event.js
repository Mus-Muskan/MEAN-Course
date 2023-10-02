const EventEmitter = require('events');
const event = new EventEmitter();
const http = require('http');

const server = http.createServer((request, response)=>{
    event.on('greetVisitor', ()=>{
        console.log('Hello Visitor!!')
    });

    event.on('greetVisitor', ()=>{
        response.end('Hello Vistor !! :)');
    });
    
    event.on('checkResult', (statuscode, result)=>{
        console.log(`Status Code is: ${statuscode} \nResult is: ${result}`);
    });

    event.emit('greetVisitor');
    event.emit('checkResult', 404 , 'Page Not Found');
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to port 8000!!!')
});
