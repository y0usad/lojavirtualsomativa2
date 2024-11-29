const api = axios.create({
  baseURL: "http://localhost:3000/api",
});
// selecionar modal

function abrirModal() {
  const modal = document.getElementById("lembretes-modal");
  modal.style.display = "flex";
}

function fecharModal() {
  const modal = document.getElementById("lembretes-modal");
  modal.style.display = "none";
}

async function getLembretes() {
  try {
    const resposta = await api.get("/lembretes");
    console.log(resposta.data);
    inserirCartas(resposta.data.lembretes);
  } catch (error) {
    console.log(error);
  }
}

function inserirCartas(lembretes) {
  const elementoMain = document.querySelector("main");

  lembretes.forEach((lembrete) => {
    const cartaHTML = ` 
      <div  class="card">
        <div class="card-body">
          <h5 class="card-title">${lembrete.title}</h5>
          <p class="card-text">
          ${lembrete.content}
          </p>
        </div>
        <div class="edit-delete-btn"><i id=${lembrete.id} onclick="editarLembrete(event)" title="editar lembrete" class="fa-regular fa-pen-to-square" style="color: #75d317;"></i><i id=${lembrete.id} title="deletar lembrete" class="fa-solid fa-trash" style="color: #ff0000;"></i></div>

      </div>`;
    elementoMain.innerHTML += cartaHTML;
  });
}

const criarLembreteForm = document.getElementById("clForm");
criarLembreteForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  await criarLembrete();
});

async function criarLembrete() {
  const title = document.getElementById("form-title-input").value;
  const content = document.getElementById("form-content").value;
  try {
    const resposta = await api.post("/lembretes", {
      title,
      content,
    });
    console.log(resposta.data);
    getLembretes();
  } catch (error) {
    console.log(error);
  }
}

async function editarLembrete(event) {
  const id = event.target.id;
  const card = event.target.closest(".card");
  const cardTitle = card.querySelector(".card-title").textContent.trim();
  const cardText = card.querySelector(".card-text").textContent.trim();
  modalFormText("editar", cardText, cardTitle);

  abrirModal();
  try {
    const resposta = await api.put(`/lembretes/${id}`);
  } catch (error) {
    console.log(error);
  }
}

function novoLembrete() {
  modalFormText();
  abrirModal();
}

function modalFormText(modo, cardText, cardTitle) {
  let formTitulo = document.getElementById("form-title");
  let formTituloInput = document.getElementById("form-title-input");
  let formContent = document.getElementById("form-content");
  let editCreateBtn = document.getElementById("edit-create-btn");
  console.log(formTituloInput);
  if (modo === "editar") {
    formTitulo.innerText = "Editar Lembrete";
    formContent.value = cardText;
    formTituloInput.value = cardTitle;
    editCreateBtn.innerText = "Editar Lembrete";
  } else {
    formTitulo.innerText = "Criar Lembrete";
    formContent.value = "";
    formTituloInput.value = "";
    editCreateBtn.innerText = "Criar Lembrete";
  }
}

getLembretes();
