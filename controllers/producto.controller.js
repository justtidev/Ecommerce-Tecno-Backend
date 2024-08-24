const { where } = require("sequelize");
const db = require("../models/index");
const producto = db.producto;

exports.obtenerTodos = (req, res) => {
  // const rgs = await producto.findAll();

  producto
    .findAll({
      include: [
        {
          model: db.categoria,
          // attributes:['descripcion']
        }
      ]
    })
    .then((registros) => {
      // res.send(registros);

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

exports.obtenerUno = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  producto
    .findOne({
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
  const { nombre, descripcionBreve, precioUnitario, stock, descripcionDetallada, costoProducto, CategoriumId } = req.body;

  producto
    .create({
      nombre: nombre,
      descripcionBreve: descripcionBreve,
      precioUnitario: precioUnitario,
      stock: stock,
      descripcionDetallada: descripcionDetallada,
      costoProducto: costoProducto,
      CategoriumId: CategoriumId

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
  const { nombre, descripcionBreve, precioUnitario, Stock, descripcionDetallada, costoProducto, CategoriumId } = req.body;
  producto
    .update(
      {
        nombre: nombre,
        descripcionBreve: descripcionBreve,
        precioUnitario: precioUnitario,
        Stock: Stock,
        descripcionDetallada: descripcionDetallada,
        costoProducto: costoProducto,
        CategoriumId: CategoriumId

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
