const express = require("express");
const {
  criarUsuario,
  loginUsuario,
} = require("../controladores/controladorUsuario");
const rota = express.Router();
// rota para criar usuario
rota.route("/criar-usuario").post(criarUsuario);
rota.route("/login").post(loginUsuario);
module.exports = rota;
