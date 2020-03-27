const connection = require('../database/connection.js');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if (!ong) {
            return res.status(400).json({ error: "ONG not found in our database"});
        }

        return res.send(ong);
    }
}