// Rotas de usuario 
const express = require("express");
const {
  criarUsuario,
  loginUsuario,
} = require("../controladores/controladorUsuario");
const rota = express.Router();
// rota para criar usuario
rota.route("/criar-usuario").post(criarUsuario);
// Rota para logar usuario
rota.route("/login").post(loginUsuario);
module.exports = rota;
