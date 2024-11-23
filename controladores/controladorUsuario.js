const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const criarUsuario = async (req, res) => {
  try {
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

module.exports = { criarUsuario };
