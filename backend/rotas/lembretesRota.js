const express = require("express");
const {
  criarLembrete,
  deletarLembrete,
  listarLembretes,
  atualizarLembretes,
} = require("../controladores/controladorLembretes.js");
const rota = express.Router();
// rota para criar usuario
rota.route("/").post(criarLembrete).get(listarLembretes);
rota.route("/:id").delete(deletarLembrete).put(atualizarLembretes);
module.exports = rota;
