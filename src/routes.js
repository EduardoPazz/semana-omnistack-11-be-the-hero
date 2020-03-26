const express = require('express');
const routes = express.Router();

// importing controllers
const IncidentController = require('./controllers/IncidentController.js');
const ONGController = require('./controllers/ONGController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController.js');

// Sessions routes
routes.post('/sessions', SessionController.create);

// Incidents routes
routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

// Profile routes
routes.get('/profile', ProfileController.index);

//ONGs routes
routes.get('/ongs', ONGController.index);

routes.post('/ongs', ONGController.create);

// Exporting routes
module.exports = routes;