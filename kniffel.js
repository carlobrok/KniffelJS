
const path = require('path');
const express = require('express');             //-> install via: npm i express
const favicon = require('serve-favicon');       //-> install via: npm i serve-favicon

//some preparations
const port = 3000;
const app = express(); 
//app.use(favicon(path.join(__dirname, 'website', 'media', 'favicon.ico')));

//Routing the start Page. The HTML
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

//Routing the style sheet. The CSS
app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'website', 'style.css'));
});

//Routing the Client-side Script. The JS
app.get('/scripts.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'website', 'scripts.js'));
});

//trying to route favicon.ico
app.get('/favicon.ico', function(req, res) {
    res.sendFile(path.join(__dirname, 'website', 'media', 'favicon.ico'));
});

//trying to route favicon.ico
app.get('/diceSix.png', function(req, res) {
    res.sendFile(path.join(__dirname, 'website', 'media', 'diceSix.png'));
});

//Listening on Port 3000. Important, but could be set to other ports too
app.listen(port, function(){
    console.log('Server started on port: ' + port);
});