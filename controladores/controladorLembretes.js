const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const criarLembrete = async (req, res) => {
  try {
    // controlador que vai ser chamado quando houver uma requisição para /api/auth/criar-usuario
    const user = await prisma.user.findUnique({
      where: { email: "loko@hotmail.com" },
    });
    console.log(user);
    const { title, content } = req.body;
    console.log(title, content);

    const novoLembrete = await prisma.note.create({
      data: { userId: user.id, title, content },
    });
    res.status(200).json(novoLembrete);
  } catch (error) {
    res.status(500).json({ mensagem: "algo deu erro.", error });
  }
};
const deletarLembrete = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const deletarProduto = await prisma.note.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(deletarProduto);
  } catch (error) {
    res.status(500).json({ mensagem: "algo deu erro.", error });
  }
};

module.exports = { criarLembrete, deletarLembrete };
