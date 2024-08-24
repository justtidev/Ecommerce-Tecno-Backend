
module.exports = (app) => {

    const rutasProducto = require("./producto.routes");

    app.use("/producto", rutasProducto);
   
    const rutasUsuario = require("./usuario.routes");

    app.use("/usuario", rutasUsuario);

    const rutasCategoria = require("./categoria.routes");

    app.use("/categoria", rutasCategoria);
    
    const rutasImagen = require("./imagen.routes");

    app.use("/imagen", rutasImagen);
   

};