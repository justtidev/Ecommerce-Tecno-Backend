const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { where, Op} = require("sequelize");
const db = require("../models/index");
const usuario = db.usuario;

/* // Simulación de usuarios en una "base de datos"
const users = [
  { email: "pepe", contraseña: "$2b$10$JREc27BzgLkJUpfGSKPskOroLhzL1F1iSSb14u.8IzUf11YpA04iu" }, // Contraseña ya hasheada con bcrypt
]; */



// Genera un token de acceso
function generateAccessToken(data) {
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

 

// Genera un token de acceso
async function registerUser(nombre, apellido,email, contraseña, rol) {
  // Verifica si el usuario ya existe
  const existingUser = await usuario.findAll({
    where:{
      email: email
    }
  });
  if (existingUser) {
    throw new Error("El usuario ya existe")
  };
console.log(email)
  // Encripta la contraseña
  const hashedContraseña = await bcrypt.hash(contraseña, 10);

  // Crea y guarda el nuevo usuario

  const newUser = {nombre, apellido, email, contraseña: hashedContraseña, rol };
  usuario.create({
    
      nombre:nombre,
      apellido:apellido,
      email: email,
      contraseña: hashedContraseña,
      rol:rol
    
  })

  console.log("newUser:", newUser);

  return { email: newUser.email };
}

module.exports = {
 /*  verifyUsuario, */
  generateAccessToken,
  registerUser,
};
