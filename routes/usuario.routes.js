
const Rutas = require('express').Router();
const controladorUsuario = require('../controllers/usuario.controller');

// CRUD

// R  Read
Rutas.get('/', controladorUsuario.obtenerTodos );
Rutas.get('/:id', controladorUsuario.obtenerUno );
// Rutas.get('/ofertas/', controladorProducto.ofertas );
// C Create
Rutas.post('/', controladorUsuario.crear );
// U Update
Rutas.put('/:id', controladorUsuario.actualizar );
// D Delete
Rutas.delete('/:id', controladorUsuario.eliminar );

module.exports = Rutas;

