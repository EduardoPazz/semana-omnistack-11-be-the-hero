const connection = require('../database/connection.js');

module.exports = {
    async index(req, res) {
        const id = req.headers.auth;

        const incidents = await connection('incidents').where('ong_id', id).select('*');

        return res.json(incidents);
    }
}