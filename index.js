const express = require("express");
const cors = require('cors'); //npm i cors
const app = express();
require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:5173', // Cambia esto al puerto y dominio de tu frontend
  credentials: true, // Permite el envío de cookies, si es necesario
}));

const port = 3000;

// permitir que lleguen los json por las url
app.use(express.json());


// llamar a base de datos
const db = require("./models/index");
// conectar al motor de DB
// para sincronizar cambios en la DB, usar:   .sync({alter:true})
db.sequelize
   .sync()
  //    .sync( { alter: true } )  
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos: ", error);
  });

// importar rutas
require("./routes/index.routes")(app);
 
// Rutas de autenticación
 const authRoutes = require('./routes/auth.routes');
 
 app.use('/auth', authRoutes);
 
 //app.use('/auth-clientes', authRoutes);
 
 // Rutas de administración
 const adminRoutes = require('./routes/admin/producto.routes');
 
 app.use('/admin/producto', adminRoutes);

app.listen(port, () => {
  console.log("SERVER iniciado en el puerto ", port);
});



/* // Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});
 */