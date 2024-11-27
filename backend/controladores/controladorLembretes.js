const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const atualizarLembretes = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  console.log(title, content);

  try {
    const lembereteAtualizado = await prisma.note.update({
      where: { id: Number(id) },
      data: { title: title, content: content },
    });
    res.status(200).json({
      response: "ok",
      lembrete: lembereteAtualizado,
    });
  } catch (error) {
    res.status(500).json({
      response: "Erro ao atualizar lembrete",
      error: error.message,
    });
  }
};
const listarLembretes = async (req, res) => {
  try {
    const lembretes = await prisma.note.findMany({
      include: { User: true },
    });
    res.status(200).json({
      response: "ok",
      lembretes: lembretes,
    });
  } catch (error) {
    res.status(500).json({
      response: "Erro ao listar lembretes",
      error: error.message,
    });
  }
};

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
  const { id } = req.params;
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

module.exports = {
  criarLembrete,
  deletarLembrete,
  listarLembretes,
  atualizarLembretes,
};
