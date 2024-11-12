const jwt = require("jsonwebtoken");

const {
  verifyUsuario,
  generateAccessToken,
  registerUsuario,
} = require("./auth.service");
const refreshTokens = [];

// Controlador para login
async function login(req, res) {
  const { email, contraseña } = req.body;

  // Verifica si el usuario es válido
  console.log("llega a login", email, contraseña);
  const usuario = await verifyUsuario(email, contraseña);
  console.log("usuario:", usuario);
  if (!usuario)
    return res
      .status(403)
      .json({ message: "Usuario o contraseña incorrectos" });

  // Genera los tokens de acceso y refresh
  const accessToken = generateAccessToken({ email: usuario.email  });
 

  res.json({ accessToken });
}

// Controlador para refrescar el token
function refreshToken(req, res) {
  const { token } = req.body;

  if (!token)
    return res.status(401).json({ message: "Token requerido" });
 
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token inválido" });

    const accessToken = generateAccessToken({ email: usuario.email });

    console.log("llega a refresh", accessToken);
    res.json({ accessToken });
  });
}

async function register(req, res) {
  const { email, contraseña } = req.body;

  try {
    const newUsuario = await registerUsuario(email, contraseña);
    res
      .status(201)
      .json({ message: "Usuario registrado exitosamente", usuario: newUsuario });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { login, refreshToken, register };
