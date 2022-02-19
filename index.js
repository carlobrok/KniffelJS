
const path = require('path');
const express = require('express');             //-> install via: npm i express

//some preparations
const port = 3000;
const app = express(); 

//Routing the start Page. The HTML
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'Website', 'index.html'));
});

//Routing the style sheet. The CSS
app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'Website', 'style.css'));
});

//Routing the Client-side Script. The JS
app.get('/scripts.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'Website', 'scripts.js'));
});

//Listening on Port 3000. Important, but could be set to other ports too
app.listen(port, function(){
    console.log('Server started on port: ' + port);
});