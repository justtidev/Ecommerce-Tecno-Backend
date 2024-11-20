
const Rutas = require('express').Router();
const controladorCupones = require('../controllers/cupones.controller');

// CRUD

// R  Read
Rutas.get('/', controladorCupones.obtenerTodos );
Rutas.get('/:id', controladorCupones.obtenerUno );
// Rutas.get('/ofertas/', controladorProducto.ofertas );
// C Create
Rutas.post('/', controladorCupones.crear );
// U Update
Rutas.put('/:id', controladorCupones.actualizar );
// D Delete
Rutas.delete('/:id', controladorCupones.eliminar );

module.exports = Rutas;

