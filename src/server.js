const { application } = require('express');
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

const porta = process.env.PORT || 8080;

server.use(express.static('public'));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("src/views", {
    express: server,
    autoescape: false
});

server.get("/", function(req, res) {
    
    return res.render("index")
})

server.get("/rca", function(req, res) {
    
    return res.render("views/rca")
})
/*
server.listen(3000, function() {
    console.log("server is running")
})
*/

server.listen(porta);



