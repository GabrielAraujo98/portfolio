const emailDoForm = document.querySelector("#email");
const mensagemDoForm = document.querySelector("#mensagem");
const botaoEnviar = document.querySelector("#enviar");
const botaoLimparMsgs = document.querySelector("#limpar-msgs");

const botaoVisualizar = document.querySelector("#visualizar-msg");

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
            
    localStorage.setItem('mensagensEnviadasJSON', JSON.stringify(mensagensEnviadas));
    
    const stringDeMensagens = localStorage.getItem('mensagensEnviadasJSON');
    const mensagensSalvas = JSON.parse(stringDeMensagens);
    
    console.log(stringDeMensagens, mensagensSalvas)
    
    emailDoForm.value = "";
    mensagemDoForm.value = "";
    console.log(mensagensEnviadas);
})
