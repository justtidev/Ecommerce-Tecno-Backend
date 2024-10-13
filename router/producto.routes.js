
const Rutas = require('express').Router();
const controladorProducto = require('../controllers/producto.controller');

// CRUD

// R  Read
Rutas.get('/', controladorProducto.obtenerTodos );
Rutas.get('/lista', controladorProducto.lista)
Rutas.get('/:id', controladorProducto.obtenerUno );
// Rutas.get('/ofertas/', controladorProducto.ofertas );
// C Create
Rutas.post('/', controladorProducto.crear );
// U Update
Rutas.put('/:id', controladorProducto.actualizar );
// D Delete
Rutas.delete('/:id', controladorProducto.eliminar );

module.exports = Rutas;

