const inputNome = document.getElementById("nome");
const saudacao = document.getElementById("saudacao");

inputNome.addEventListener("change", function () {
  const nome = inputNome.value.trim();

  if (nome === "") {
    saudacao.textContent = "";
  } else {
    const msg = "Meu nome é " + nome;
    saudacao.textContent = msg;
    console.log(msg);
  }
});