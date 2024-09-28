const express = require('express');
const routes = express.Router();

const userController = require('../controllers/user.controller');

// POST route for registering a user
routes.post('/register', userController.registerUser);

// GET route for fetching user details
routes.get('/users', userController.getUser);

module.exports = routes;
