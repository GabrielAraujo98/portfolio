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

        if(mensagensEnviadas[0].email === "teste"){
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
            botaoVisualizar.setAttribute("class", "btn btn-dark visible");
        };

        emailDoForm.value = "";
        mensagemDoForm.value = "";
    
        localStorage.setItem('mensagensEnviadasJSON', JSON.stringify(mensagensEnviadas));
        const stringDeMensagens = localStorage.getItem('mensagensEnviadasJSON');
        const mensagensSalvas = JSON.parse(stringDeMensagens);

        console.log(stringDeMensagens, mensagensSalvas)
        
        console.log(mensagensEnviadas);
    
})

window.addEventListener('load', () => {
    const mensagensAtuais = localStorage.getItem('mensagensEnviadasJSON');

    if(JSON.parse(mensagensAtuais).email !== "teste" ){
        const arrayDeMensagens = JSON.parse(mensagensAtuais);

        for(var i = 0; i < arrayDeMensagens.length; i++){
            mensagensEnviadas.push(arrayDeMensagens[i]);
        }
        
        mensagensEnviadas.shift();
    }
});