const { where } = require("sequelize");
const db = require("../models/index");
const usuario = db.usuario;

exports.obtenerTodos = (req, res) => {
  // const rgs = await usuario.findAll();

  usuario
    .findAll()
    .then((registros) => {
      // res.send(registros);

      res.status(200).json({
        ok: true,
        msg: "Listado de usuarios",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los usuarios",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerUno = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  usuario
    .findOne({
      where: { id: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "usuario encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "usuario no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener el usuario",
        status: 500,
        data: error,
      });
    });
};

exports.crear = (req, res) => {
  const { nombre, apellido, email, contraseña, rol } = req.body;

  usuario
    .create({
      nombre: nombre,
      apellido: apellido,
      email: email,
      contraseña: contraseña,
      rol: rol
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "usuario creado",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear el usuario",
        status: 500,
        data: error,
      });
    });
};

exports.actualizar = (req, res) => {
  const _id = req.params.id;
  const { nombre, apellido, email, contraseña, rol } = req.body;
  usuario
    .update(
      {
        nombre: nombre,
        apellido: apellido,
        email: email,
        contraseña: contraseña,
        rol: rol
      },
      {
        where: { id: _id },
      }
    )
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "usuario actualizado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al actualizar el usuario",
        status: 500,
        data: error,
      });
    });
};

exports.eliminar = (req, res) => {
  const _id = req.params.id;

  usuario
    .destroy({
      where: { id: _id },
    })
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "usuario eliminado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al eliminar el usuario",
        status: 500,
        data: error,
      });
    });
};

/* exports.ofertas = (req, res) => {
    res.send('Hola soy el root de usuario');
} */
