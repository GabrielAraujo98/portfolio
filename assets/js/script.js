const emailDoForm = document.querySelector("#email");
const mensagemDoForm = document.querySelector("#mensagem");
const botaoEnviar = document.querySelector("#enviar");
const botaoVisualizar = document.querySelector("#visualizar-msg");

const todasAsMensagens = document.querySelector("#msgs-enviadas");

const mensagensEnviadas = new Object( [
    {
        email : "teste",
        mensagem : "teste"
    }
] );

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    if(mensagensEnviadas.length == 1 && mensagensEnviadas[0].email === "teste"){
        mensagensEnviadas.push(
            {
                email : emailDoForm.value,
                mensagem : mensagemDoForm.value
            }
        );
        mensagensEnviadas.shift();
        botaoVisualizar.setAttribute("class", "btn btn-dark visible");
    }else{
        mensagensEnviadas.push(
            {
                email : emailDoForm.value,
                mensagem : mensagemDoForm.value
            }
        );
    };
    emailDoForm.value = "";
    mensagemDoForm.value = "";
    console.log(mensagensEnviadas);
})