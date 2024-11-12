const express = require('express');
const { login, refreshToken, register } = require('../controllers/auth.controller');

const Rutas = express.Router();

// paso 1 - registrarnos
Rutas.post('/register', register); 

// paso 2 - loguearnos
Rutas.post('/login', login);

// paso 3 - cuando se requiera, se puede generar un nuevo token
Rutas.post('/refresh', refreshToken);

module.exports = Rutas;

