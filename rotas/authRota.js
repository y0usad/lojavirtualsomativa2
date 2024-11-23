const express = require("express");
const { criarUsuario } = require("../controladores/controladorUsuario");
const rota = express.Router();
rota.route("/criar-usuario").post(criarUsuario);
module.exports = rota;
