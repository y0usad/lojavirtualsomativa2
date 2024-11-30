const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const criarUsuario = async (req, res) => {
  try {
    // controlador que vai ser chamado quando houver uma requisição para /api/auth/criar-usuario
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const novoUsuario = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(200).json({ name, email, password });
  } catch (error) {
    res.status(500).json({ mensagem: "algo deu erro.", error });
  }
};

const loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ mensagem: "Email ou Senha errado." });
    }
    const { id } = user;
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ mensagem: "algo deu erro.", error });
  }
};

module.exports = { criarUsuario, loginUsuario };
