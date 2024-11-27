const express = require("express");
const { criarProduto } = require("../controladores/controladorProdutos.js");
const rota = express.Router();
// rota para criar usuario
rota.route("/").post(criarProduto);
module.exports = rota;
