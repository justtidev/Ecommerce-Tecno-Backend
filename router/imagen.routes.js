
const Rutas = require('express').Router();
const controladorImagen = require('../controllers/imagen.controller');

// CRUD

// R  Read
Rutas.get('/', controladorImagen.obtenerTodos );
Rutas.get('/:id', controladorImagen.obtenerUno );
Rutas.get('/prod/:id', controladorImagen.obtenerImagenPorProd );
// Rutas.get('/ofertas/', controladorProducto.ofertas );
// C Create
Rutas.post('/', controladorImagen.crear );
// U Update
Rutas.put('/:id', controladorImagen.actualizar );
// D Delete
Rutas.delete('/:id', controladorImagen.eliminar );

module.exports = Rutas;

