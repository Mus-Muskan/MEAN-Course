const express = require('express');
const app = express();

app.get("/" , (request, response)=>{
    response.send("Hi there! Good to see you:)");
});

app.get('/home', (request, response)=>{
    response.send("Home page:)");
});

app.get('/aboutus', (request, response)=>{
    response.send("About Us page:)");
});

app.get('/contact', (request, response)=>{
    response.send("Contact page:)");
});

app.listen(8000, ()=>{
    console.log("Listening to the app on port 8000!!");
})