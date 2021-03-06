const connection = require('../database/connection.js');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('incidents')
            .count();

        const data = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(6)
            .offset( (page - 1) * 6 )
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        res.header('X-Total-Count', count['count(*)']);

        const num = count['count(*)'];

        return res.json({data, num});
    }, 

    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authentication;

        const [ id ] = await connection('incidents').insert({
            title, description, value, ong_id
        })

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = await req.params;
        const ong_id = await req.headers.auth;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident['ong_id'] !== ong_id) {
            return res.status(401).json({ error: "Authentications denied" });
        }

        await connection('incidents').where('id', id).delete();
    
        return res.status(204).send();
    }
}