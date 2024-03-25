const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("funcionando");
})