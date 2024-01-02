let listaDeNumero = [];
let quantidadeDeNumeros = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let numeroDeTentativas = 1;
console.log(numeroAleatorio);
exibirTextoHeading( "Jogo do número secreto");
exibirTextoParagraph(`Escreva um número entre 1 e ${quantidadeDeNumeros}`);


function verificarChute()
{
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio)
    {
        exibirTextoHeading(`Você acertou! O número secreto era ${numeroAleatorio}`);
        let mensagemTentativas = numeroDeTentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoParagraph(`Você descobriu o número secreto com ${numeroDeTentativas} ${mensagemTentativas}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.querySelector("button").setAttribute("disabled", true);
    }
    else if (chute > numeroAleatorio)
    {
        exibirTextoHeading(`Você errou! O número secreto é menor do que ${chute}`);
        limparCampo();
    }
    else
    {
        exibirTextoHeading(`Você errou! O número secreto é maior do que ${chute}`);
        limparCampo();
    }
        numeroDeTentativas++;
}


function reiniciarJogo()
{
    numeroAleatorio = gerarNumeroAleatorio();
    console.log(numeroAleatorio);
    limparCampo();
    document.querySelector("button").removeAttribute("disabled");
    exibirTextoHeading( "Jogo do número secreto"); 
    exibirTextoParagraph(`Escreva um número entre 1 e ${quantidadeDeNumeros}`);
    document.getElementById("reiniciar").setAttribute("disabled", true);

}

function exibirTextoHeading(texto)
{
    let campo = document.querySelector("h1");
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirTextoParagraph(texto)
{
    let campo = document.querySelector("p");
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio()
{
    var numeroAleatorio = parseInt(Math.random() * quantidadeDeNumeros + 1)
    if(listaDeNumero.length == quantidadeDeNumeros)
    {
        listaDeNumero = [];
    }
    if(listaDeNumero.includes(numeroAleatorio))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumero.push(numeroAleatorio);
        console.log(listaDeNumero);
        return numeroAleatorio;
    }
}


