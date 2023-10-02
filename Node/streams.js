const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response)=>{
fs.readFile("new.txt", 'utf-8', (err, data)=>{
    console.log(data);
    response.end(data);
});

const stream = fs.createReadStream('new.txt');
stream.on('data', (chunks)=>{
    response.end(chunks);
})

});
server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to port 8000!!!')
});


/*
1. Readable
2. Writable
3. Duplex 
4. Transform 

Events on streams:
1. data
2. end 
3. finish
4. error
*/

