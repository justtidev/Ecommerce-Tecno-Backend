
const Rutas = require('express').Router();
const controladorUsuario = require('../controllers/usuario.controller');

// CRUD

// R  Read
Rutas.get('/', controladorUsuario.obtenerUsuarios );
Rutas.get('/:id', controladorUsuario.obtenerUsuarioById );
// Rutas.get('/ofertas/', controladorProducto.ofertas );
// C Create
Rutas.post('/', controladorUsuario.crearUsuario );
// U Update
Rutas.put('/:id', controladorUsuario.actualizarUsuario );
// D Delete
Rutas.delete('/:id', controladorUsuario.eliminarUsuario );
Rutas.post('/', controladorUsuario.loginUsuario );
module.exports = Rutas;

