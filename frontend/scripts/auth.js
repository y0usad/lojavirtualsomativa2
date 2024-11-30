// funcoes para login e criação de conta de usuario 
const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
});
async function loginUsuario(event) {
  event.preventDefault();
  const email = document.getElementById("inputloginemail").value;
  const password = document.getElementById("inputloginpassword").value;
  console.log(email, password);
  try {
    const resposta = await api.post("/login", { email, password });
    console.log(resposta);
    localStorage.setItem("id", resposta.data.id);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}
async function criarConta(event) {
  event.preventDefault();
  const email = document.getElementById("inputcriaremail").value;
  const password = document.getElementById("inputcriarpassword").value;
  console.log(email, password);
  try {
    const resposta = await api.post("/criar-usuario", { email, password });
    console.log(resposta);
    localStorage.setItem("id", resposta.data.id);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
  }
}
