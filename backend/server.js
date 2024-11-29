// aqui foi criado o server com express
const lembretesRotas = require("./rotas/lembretesRota");
const authRota = require("./rotas/authRota");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
// definindo rota para autenticação de usuario
app.use("/api/auth", authRota);
app.use("/api/lembretes", lembretesRotas);

app.listen(port, () => console.log("Servidor rodando na porta " + port));
