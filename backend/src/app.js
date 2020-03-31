const express = require('express');
const { errors } = require('celebrate'); /* usamos o errors aqui para o nodejs saber retornar uma mensagem de erro mais apropriada quando alguma validação não passa */
const app = express();

const routes = require('./routes.js');

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(routes);
app.use(errors()); /* E é assim que se define o errors para todas as rotas *** testar um erros e mostrar que dá pra fazer intercionalização e usar as keys informadas pra melhorar a usabilidade do usuário */

module.exports = app; /* exportando o app para ser usado no server.js */