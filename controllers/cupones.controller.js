const { where } = require("sequelize");
const db = require("../models/index");
const cupones = db.cupones;

exports.obtenerTodos = (req, res) => {
  // const rgs = await usuario.findAll();

  cupones
    .findAll()
    .then((registros) => {
      // res.send(registros);

      res.status(200).json({
        ok: true,
        msg: "Listado de cupones",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener las cuponess",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerUno = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  cupones.findOne({
    where: { id: _id },
  })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "cupon encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "cupon no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener la cupones",
        status: 500,
        data: error,
      });
    });
};

exports.crear = (req, res) => {
  const { codigo, descuento } = req.body;

  cupones.create({
    codigo:codigo,
    descuento: descuento

  })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "cupon creado",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear la cupones",
        status: 500,
        data: error,
      });
    });
};

exports.actualizar = (req, res) => {
  const _id = req.params.id;
  const { codigo, descuento } = req.body;
  cupones
    .update(
      {
        codigo:codigo,
    descuento: descuento
      },
      {
        where: { id: _id },
      }
    )
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "cupon actualizado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al actualizar el cupon",
        status: 500,
        data: error,
      });
    });
};

exports.eliminar = (req, res) => {
  const _id = req.params.id;

  cupones
    .destroy({
      where: { id: _id },
    })
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "cupon eliminado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al eliminar la cupon",
        status: 500,
        data: error,
      });
    });
};
