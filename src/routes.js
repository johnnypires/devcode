const express = require("express");
const routes = express.Router();

routes.get("/", function(req, res) {
    return res.render("layout.njk")
})

routes.get("/rca", function(req, res) {
    return res.render("rca")
})




module.exports = routes;