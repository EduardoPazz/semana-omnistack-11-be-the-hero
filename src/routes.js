const express = require('express');
const routes = express.Router();

routes.get('/example', (req, res) => {
    res.send("It worked!");
});

module.exports = routes;