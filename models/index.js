//objeto completo de sequelize,, por eso constante es con mayus
const Sequelize = require("sequelize");

//en config/index tengo la info para acceder a la base de datos("nombre del esquema", "user", "password", objJson))
const config = require("../config/index"); // se puede omitir el index.js

//el objeto sequelize con minuscula la s representa la conexion a la base de datos
//() vamos a ir cargando un monton de info que la conseguimos adentro del motor de BD
//()traigo de config.db las propiedades("nombre del esquema", "user", "password", objJson))
const sequelize = new Sequelize(
  config.db.schema,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    port: config.db.port,
  }
);

//genermos objeto db vacio para usarlo como un contenedor. Que agrupe todo lo necesario 
const db = {};

//creamos propiedad Sequelize y sequelize que vamos a necesitar
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importar los modelos
//"require" porque estoy haciendo una importacion del archivo que puede ser producto.model. Que esta en la misma carpeta de index.js
//despues del require + producto.model  ponemos un parametro sequelize

db.producto = require("./producto.model")(sequelize, Sequelize);
db.usuario = require("./usuario.model")(sequelize, Sequelize);
db.categoria = require("./categoria.model")(sequelize, Sequelize);
db.imagen = require("./imagen.model")(sequelize, Sequelize);

// relaciones entre modelos
//relacion 1 a muchos
//un producto puede tener muchas imagenes
db.producto.hasMany(db.imagen);
//una imagen tiene un producto
db.imagen.belongsTo(db.producto);

//una categoria tiene muchos productos
db.categoria.hasMany(db.producto);
//un producto tiene una categoria
db.producto.belongsTo(db.categoria);


//FALTA***********************************
//una categoria Padre puede tener muchas categorias
//una categoria puede tener una categoria Padre






module.exports = db;
