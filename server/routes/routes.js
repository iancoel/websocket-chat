const express = require('express');
const users = require('../controllers/users');

const routes = express.Router();

routes.get('/users', users.findAll);
routes.post('/users', users.addUser);
routes.get('/users/:id', users.findUser);
routes.put('/users/:id', users.updateUser);
routes.delete('/users/:id', users.deleteUser);

module.exports = routes;
