const express = require("express");
const {
  criarLembrete,
  deletarLembrete,
  listarLembretes,
  atualizarLembretes,
} = require("../controladores/controladorLembretes.js");
const rota = express.Router();
// rota para criar usuario
rota.route("/").post(criarLembrete);
rota.route("/:id").delete(deletarLembrete).put(atualizarLembretes);
rota.route("/usuario/:idUsuario").get(listarLembretes);
module.exports = rota;
