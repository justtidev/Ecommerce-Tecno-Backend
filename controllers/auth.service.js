const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { where } = require("sequelize");
const db = require("../models/index");
const usuario = db.usuario;

/* // Simulación de usuarios en una "base de datos"
const users = [
  { email: "pepe", contraseña: "$2b$10$JREc27BzgLkJUpfGSKPskOroLhzL1F1iSSb14u.8IzUf11YpA04iu" }, // Contraseña ya hasheada con bcrypt
]; */

// Verifica el usuario y la contraseña
async function verifyUser(email, contraseña) {
  console.log("llega a verifyUser", email, contraseña);
  const user = usuario.findAll((u) => u.email == email);
  console.log("user encontrado", user);
  if (!user?.email) return null;

  const validContraseña = await bcrypt.compare(contraseña, user.contraseña);
  console.log("validContraseña::", validContraseña);
  return validContraseña ? user : null;
}

// Genera un token de acceso
function generateAccessToken(data) {
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

 

// Genera un token de acceso
async function registerUser(usuario, contraseña) {
  // Verifica si el usuario ya existe
  const existingUser = await usuario.findAll({
    where:{
      email: email
    }
  });
  if (existingUser) {
    throw new Error("El usuario ya existe")
  };

  // Encripta la contraseña
  const hashedContraseña = await bcrypt.hash(contraseña, 10);

  // Crea y guarda el nuevo usuario
  const newUser = { email, contraseña: hashedContraseña };
  usuario.create({
    data:{
      email: email,
      contraseña: hashedContraseña
    }
  })

  console.log("newUser:", newUser);

  return { email: newUser.email };
}

module.exports = {
  verifyUser,
  generateAccessToken,
  registerUser,
};
