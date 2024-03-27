const asMensagens = document.querySelector("#msgs-enviadas");
const botaoLimparMensagens = document.querySelector("#limpar-msgs");
const botaoVoltarContato = document.querySelector("#voltar-contato");

const stringdoLocaStorage = localStorage.getItem('mensagensEnviadasJSON')     
const mensagensSalvas = JSON.parse(stringdoLocaStorage);

botaoLimparMensagens.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.clear();
    asMensagens.innerHTML = "<container></container>";
})

for(var a = 0; a < mensagensSalvas.length; a++){
    
    const card = document.createElement('div');
    card.innerHTML += `<div class="form-contato" style="margin-bottom: 2rem; margin-top: 2rem;"><h3>${mensagensSalvas[a].email}</h3><p>${mensagensSalvas[a].mensagem}</p></div>`;
    
    asMensagens.appendChild(card);
}