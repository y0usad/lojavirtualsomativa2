const express = require("express");
const {
  criarLembrete,
  deletarLembrete
} = require("../controladores/controladorLembretes.js");
const rota = express.Router();
// rota para criar usuario
rota.route("/").post(criarLembrete).delete(deletarLembrete);
module.exports = rota;
