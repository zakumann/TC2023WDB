

const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: samuel742able@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Samuel and I love leaning English and typing code.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Typing Code</li><li>Leaning English</li></ul>")
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
