// funcoes para login e criação de conta de usuario
const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
});
async function loginUsuario(event) {
  event.preventDefault();
  const email = document.getElementById("inputloginemail").value;
  const password = document.getElementById("inputloginpassword").value;

  try {
    const resposta = await api.post("/login", { email, password });

    localStorage.setItem("id", resposta.data.id);
    window.location.href = "/";
  } catch (error) {
    const errorLogin = document.getElementById("errorLogin");
    console.log(error);
    const erro = error.response.data.error;

    errorLogin.innerText = erro;
  }
}
async function criarConta(event) {
  event.preventDefault();
  const email = document.getElementById("inputcriaremail").value;
  const password = document.getElementById("inputcriarpassword").value;

  try {
    const resposta = await api.post("/criar-usuario", { email, password });

    localStorage.setItem("id", resposta.data.id);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
    const erroSpan = document.getElementById("MsgErroLogin");
    erroSpan.innerText = "Email Já Cadastrado!";
  }
}
