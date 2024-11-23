// aqui foi criado o server com express
const authRota = require("./rotas/authRota");
const express = require("express");
const app = express();

app.get("/produtos", async (req, res) => {
  res.send("fazoL");
});

app.use(express.json());
// definindo rota para autenticação de usuario 
app.use("/api/auth", authRota);

app.listen(3000, () => console.log("fazoL"));
