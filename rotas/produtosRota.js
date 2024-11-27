const express = require("express");
const {
  criarProduto,
  deletarProduto,
} = require("../controladores/controladorProdutos.js");
const rota = express.Router();
// rota para criar usuario
rota.route("/").post(criarProduto).delete(deletarProduto);
module.exports = rota;
