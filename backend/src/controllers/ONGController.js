const connection = require('../database/connection.js');

module.exports = {
    async index(req, res) {
        const data = await connection('ongs').select('*');
    
        return res.json(data);
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id = require('crypto').randomBytes(4).toString('HEX'); // create a random id
   
       
        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        });
   
        return res.json({ id });
    }
}