// Controladores que criam e fazem login de usuario
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const criarUsuario = async (req, res) => {
  try {
    // controlador que vai ser chamado quando houver uma requisição para /api/auth/criar-usuario
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ res: "Faltando senha/email" });
    const salt = 10;
    const passwordCriptografado = await bcrypt.hash(password, salt);
    const novoUsuario = await prisma.user.create({
      data: { email, password: passwordCriptografado },
    });
    const { id } = novoUsuario;
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ mensagem: "algo deu erro.", error });
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    if (!email || !password)
      throw new Error("Dados Invalidos!")
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Email não cadastrado!")
    const senhaCorreta = await bcrypt.compare(password, user.password);
    console.log(senhaCorreta);
    if (!senhaCorreta) {
      throw new Error("Senha Incorreta!");
    }
    const { id } = user;
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarUsuario, loginUsuario };
