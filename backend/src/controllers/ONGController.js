const connection = require('../database/connection.js');
const generateUniqueID = require('../utils/generateUniqueID.js');

module.exports = {
    async index(req, res) {
        const data = await connection('ongs').select('*');
        console.log(data);
        return res.json(data);
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        const id =  generateUniqueID;// create a random id
        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        });
   
        return res.json({ id });
    }
}