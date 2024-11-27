const express = require("express");
const { criarUsuario } = require("../controladores/controladorUsuario");
const rota = express.Router();
// rota para criar usuario
rota.route("/criar-usuario").post(criarUsuario);
module.exports = rota;
