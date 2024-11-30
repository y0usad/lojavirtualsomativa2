const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
});
async function loginUsuario() {
  const email = document.getElementById("inputloginemail").value;
  const password = document.getElementById("inputloginpassword").value;
  console.log(email, password);
  try {
    const resposta = await api.post("/login", { email, password });
    console.log(resposta);
    localStorage.setItem("id", resposta.data.id);
  } catch (error) {
    console.log(error);
  }
}
