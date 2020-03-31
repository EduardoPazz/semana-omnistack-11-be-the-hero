const express = require('express');
const routes = express.Router();

// importing controllers
const IncidentController = require('./controllers/IncidentController.js');
const ONGController = require('./controllers/ONGController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController.js');

// importing validators
const IncidentsValidators = require('./validators/IncidentsValidators');
const ONGValidators = require('./validators/ONGValidators');
const ProfileValidators = require('./validators/ProfileValidators');
const SessionValidators = require('./validators/SessionValidators');

// routes

// Incidents routes
routes.get('/incidents', IncidentsValidators.index, IncidentController.index); /* As rotas, em Express, funcionam de forma contínua. Logo, em cada comando, pode haver múltiplos parâmetros. No caso de uma validação, é importante informar o método de validação ANTES do controller, obviamente. Por lógica, infinitos parâmetros de validação poderiam ser passados antes do controller. Esse conceito é chamado de middlewares */

routes.post('/incidents', IncidentsValidators.create, IncidentController.create);

routes.delete('/incidents/:id', IncidentsValidators.delete, IncidentController.delete);

//ONGs routes
routes.get('/ongs', ONGController.index); /* this one doesn't need a validator */

routes.post('/ongs', ONGValidators.create, ONGController.create); 

// Profile routes
routes.get('/profile', ProfileValidators.index, ProfileController.index);

// Sessions routes
routes.post('/sessions', SessionValidators.create, SessionController.create);

// Exporting routes
module.exports = routes;