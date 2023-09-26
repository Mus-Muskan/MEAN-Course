//REPL
// 1. Perform operations (with '_')
// 2. Write multiline code
// 3. Edit code

//Core Modules
// 1. FileSystem,
// 2. OS Modules
// 3. Path Module

/*
1. File System
Synchronous Coding

const fs = require('fs');
//fs.writeFileSync("sample.txt", 'I love Avocados!');
fs.writeFileSync("sample.txt", ' Avocados love me too!');

fs.appendFileSync('sample.txt', 'I love them too!');

fs.renameSync('sample.txt', 'info.txt');

const data = fs.readFileSync('info.txt');
a = data.toString();
console.log(a);



//Asynchronous Coding

const fs=require('fs');

fs.writeFile("new.txt", "Pandas are lazy!", (err)=>{
    console.log("Data entered!!");
});

fs.appendFile("new.txt", "But they are super cute!! :)", ()=>{
    console.log("Data updated !!");
    console.log("Your content is loading...");
});

setTimeout((err)=>{fs.readFile("new.txt",'UTF-8', (err, data)=>{
    console.log(data);
})}, 4000);



// Path Module

const path = require('path');

console.log(path.dirname('C:/Users/Muskan/Desktop/MEAN Course/Node/Basics.js'));
console.log(path.extname('C:/Users/Muskan/Desktop/MEAN Course/Node/Basics.js'));
console.log(path.basename('C:/Users/Muskan/Desktop/MEAN Course/Node/Basics.js'));

console.log((path.parse('C:/Users/Muskan/Desktop/MEAN Course/Node/Basics.js')));

*/

var a = 'Hello!';
console.log(a);

console.log('JKHVLJGVCLH');
