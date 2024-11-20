
module.exports = (app) => {

    const rutasProducto = require("./producto.routes");

    app.use("/producto", rutasProducto);
   
    const rutasUsuario = require("./usuario.routes");

    app.use("/usuario", rutasUsuario);

    const rutasCategoria = require("./categoria.routes");

    app.use("/categoria", rutasCategoria);

    const rutasCupones = require("./cupones.routes");

    app.use("/cupones", rutasCupones);
    
    const rutasImagen = require("./imagen.routes");

    app.use("/imagen", rutasImagen);

    // Rutas de autenticación
 const authRoutes = require('./auth.routes');
 
 app.use('/auth', authRoutes);
 
 //app.use('/auth-clientes', authRoutes);
 
 // Rutas de administración
 const adminRoutes = require('./admin/producto.routes');
 
 app.use('/admin/producto', adminRoutes);
   

};