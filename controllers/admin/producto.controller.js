const { where, Op } = require("sequelize");
const db = require("../models/index");
const producto = db.producto;

exports.obtenerTodos = (req, res) => {
  // const rgs = await producto.findAll();

  producto
    .findAll({
      include: [
        {
          model: db.categoria,
         // attributes:['nombre'],
         model: db.imagen 
        }
      ]
    })
    .then((registros) => {
      // res.send(registros);
      res.json({ producto, message: `Acceso concedido a ${req.user?.username}` });

      res.status(200).json({
        ok: true,
        msg: "Listado de productos",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los productos",
        status: 500,
        data: error,
      });
    });
};

exports.lista = (req,res) => {

   const pagina = parseInt(req.query.pagina);
  const cantidad = parseInt(req.query.cantidad);
const texto = req.query.filtro;
  const categoria = parseInt(req.query.categoria);
  const rangoPrecio = req.query.rangoPrecio 

 
  let whereFiltro={};

  if ((texto && texto.length > 0) || (categoria && categoria != 0 ) 
    || (rangoPrecio && rangoPrecio.length > 1)
    ) 
    {

    whereFiltro[Op.and] = []; // where (   and    and    and )

    if (texto && texto.length > 0) {
      // aca vamos a agregar el filtro de texto
      whereFiltro[Op.and].push(
        {
        nombre: { [Op.like]: '%'+ texto +'%' },  // cambiar "nombre" por el campo de texto a buscar
        }
    )
    }

    if (categoria && categoria > 0) {
      // aca vamos a agregar el filtro de categorias
      

      whereFiltro[Op.and].push({
        CategoriumId: categoria   // cambiar categoriaId por el campo de categorias a buscar
    });

    }
    console.log("llega a lista", pagina,cantidad, texto, categoria, )

    if (rangoPrecio && rangoPrecio.length > 1) {
      const rangoPrecioVector = rangoPrecio.split(",");
      whereFiltro[Op.and].push({
        precioUnitario: {[Op.between]:[parseInt(rangoPrecioVector[0]),parseInt(rangoPrecioVector[1])]},
      });
      console.log('Vector', rangoPrecioVector)
      
    } 
     
  }


   producto.findAndCountAll({
     where: whereFiltro,   
    include:[
           {
            model: db.categoria,
            
            } ,
            { 
              model: db.imagen,
            }
       ],  
      distinct: true,
       offset: (pagina - 1) * cantidad,
       limit: cantidad
   })
   .then((registros) => {
       console.log("envia registros")
       res.status(200).json({
           ok: true,
           msg: "Listado  ",
           status: 200,
           data: registros
       })
   })
   .catch((error) => {
       res.status(500).json({
           ok: false,
           msg: "Error al obtener el listado  ",
           status: 500,
           data: error
       })
   })
}

exports.obtenerUno = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  producto
    .findOne({
      include: [
        {
          model: db.categoria,
          //attributes:['nombre'],
          model: db.imagen 
        }
      ],
      where: { id: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Producto encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Producto no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener el producto",
        status: 500,
        data: error,
      });
    });
};

exports.crear = (req, res) => {
  const { nombre, descripcionBreve, precioUnitario, stock, descripcionDetallada, costoProducto, CategoriumId, disponible } = req.body;

  producto
    .create({
      nombre: nombre,
      descripcionBreve: descripcionBreve,
      precioUnitario: precioUnitario,
      stock: stock,
      descripcionDetallada: descripcionDetallada,
      costoProducto: costoProducto,
      CategoriumId: CategoriumId,
      disponible: disponible,

    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Producto creado",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear el producto",
        status: 500,
        data: error,
      });
    });
};

exports.actualizar = (req, res) => {
  const _id = req.params.id;
  const { nombre, descripcionBreve, precioUnitario, Stock, descripcionDetallada, costoProducto, CategoriumId, disponible } = req.body;
  producto
    .update(
      {
        nombre: nombre,
        descripcionBreve: descripcionBreve,
        precioUnitario: precioUnitario,
        Stock: Stock,
        descripcionDetallada: descripcionDetallada,
        costoProducto: costoProducto,
        CategoriumId: CategoriumId,
        disponible: disponible,

      },
      {
        where: { id: _id },
      }
    )
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "Producto actualizado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al actualizar el producto",
        status: 500,
        data: error,
      });
    });
};

exports.eliminar = (req, res) => {
  const _id = req.params.id;

  producto
    .destroy({
      where: { id: _id },
    })
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "Producto eliminado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al eliminar el producto",
        status: 500,
        data: error,
      });
    });
};

/* exports.ofertas = (req, res) => {
    res.send('Hola soy el root de producto');
} */
