const knex = require('knex');
const config = require('../../knexfile.js');

console.log(process.env.NODE_ENV);
const environment = process.env./* É possível acessar variáveis de ambiente por meio do objeto process.env, como está sendo feito aqui */NODE_ENV === 'test' ? config.test : config.development;
console.log(environment);
module.exports = knex(environment); /* O environment pode mudar de acordo com a variável ambiente. */
