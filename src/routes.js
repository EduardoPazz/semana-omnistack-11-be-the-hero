const express = require('express');
const routes = express.Router();

const connection = require('./database/connection.js');

routes.get('/ongs', async (req, res) => {
    const data = await connection('ongs').select('*');

    return res.json(data);
});

routes.post('/ongs', async (req, res) => {
     const { name, email, whatsapp, city, uf } = req.body;
     const id = require('crypto').randomBytes(4).toString('HEX'); // create a random id

    
    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    });

     return res.json({ id });
});

module.exports = routes;