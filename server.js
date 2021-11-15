const { application } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

const porta = process.env.PORT || 8080;

server.use(express.static('public'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
});

server.get("/", function(req, res) {
    
    return res.render("index")
})

server.listen(porta);
/*
server.listen(3000, function() {
    console.log("server is running")
})*/


