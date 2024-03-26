const emailDoForm = document.querySelector("#email");
const mensagemDoForm = document.querySelector("#mensagem");
const botaoEnviar = document.querySelector("#enviar");

const mensagensEnviadas = new Object( [
    {
        email : "teste",
        mensagem : "teste"
    }
] )

botaoEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    if(mensagensEnviadas.length == 1 && mensagensEnviadas[0].email === "teste"){
        mensagensEnviadas.push(
            {
                email : emailDoForm.value,
                mensagem : mensagemDoForm.value
            }
        )
        mensagensEnviadas.shift()
    }else{
        mensagensEnviadas.push(
            {
                email : emailDoForm.value,
                mensagem : mensagemDoForm.value
            }
        )
    }
    console.log(mensagensEnviadas)
})



