const knex = require('knex');
const config = require('../../knexfile.js');

const environment = process.env.NODE_ENV === 'test' ? config.test : config.development;
module.exports = knex(environment); 
