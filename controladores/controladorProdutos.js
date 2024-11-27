const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const criarProduto = async (req, res) => {
  try {
    // controlador que vai ser chamado quando houver uma requisição para /api/auth/criar-usuario
    const user = await prisma.user.findUnique({
      where: { email: "loko@hotmail.com" },
    });
    console.log(user);
    const { name, quantidade, descricao, img, price } = req.body;
    console.log(name, quantidade, descricao, img);
    const novoProduto = await prisma.product.create({
      data: { userId: user.id, name, quantidade, descricao, img, price },
    });
    res.status(200).json(novoProduto);
  } catch (error) {
    res.status(500).json({ mensagem: "algo deu erro.", error });
  }
};

module.exports = { criarProduto };
