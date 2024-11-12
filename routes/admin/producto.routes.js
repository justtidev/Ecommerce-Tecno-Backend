
const Rutas = require('express').Router();
const { authenticateToken } = require('../../auth/auth.middleware');  // Importa el middleware de autenticación

/* // CRUD

// R  Read
Rutas.get('/', authenticateToken.obtenerTodos );
Rutas.get('/lista', authenticateToken.lista)
Rutas.get('/:id', authenticateToken.obtenerUno );
// Rutas.get('/ofertas/', authenticateToken.ofertas );
// C Create
Rutas.post('/', authenticateToken.crear );
// U Update
Rutas.put('/:id', authenticateToken.actualizar );
// D Delete
Rutas.delete('/:id', authenticateToken.eliminar ); */

module.exports = Rutas;

