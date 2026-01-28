
let palavras = ["codigo", "matriz", "teclado", "janela", "motor", "nuvem", "github", "curso"]; // Palavras


let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]; // Vai sortear uma palavra

let tentativas = 6;


let input = document.getElementById("inputPalpite");  //pegar elementos do html
let botao = document.getElementById("btnTentar");
let resultado = document.getElementById("resultado");
let tentativasRestantes = document.getElementById("tentativasRestantes");
let botaoReiniciar = document.getElementById("btnReiniciar");


tentativasRestantes.textContent = "Tentativas restantes: " + tentativas;  // mostra as tentativas


botao.addEventListener("click", function () { //botão de tentar
    let palpite = input.value.toLowerCase();

    if (palpite === "") {
        resultado.textContent = "Digite alguma coisa!";
        resultado.style.color = "orange";
        return;
    }

    tentativas--;

    if (palpite === palavraSecreta) {
        resultado.textContent = "Parabéns! Você acertou!";
        resultado.style.color = "green";
        botao.disabled = true; // trsva o botão
        input.disabled = true;
    } else {
        resultado.textContent = "Errado! A palavra não é: " + palpite;
        resultado.style.color = "red";
    }

    if (tentativas <= 0 && palpite !== palavraSecreta) {
        resultado.textContent = "Você perdeu! A palavra correta era: " + palavraSecreta;
        resultado.style.color = "black";
        botao.disabled = true;
        input.disabled = true;
    }

    tentativasRestantes.textContent = "Tentativas restantes: " + tentativas;
    input.value = "";
});


botaoReiniciar.addEventListener("click", function () { // vai reiniciar
    
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]; // voltar tudo igual no começo
    tentativas = 6;

    resultado.textContent = "";
    tentativasRestantes.textContent = "Tentativas restantes: " + tentativas;

    input.value = "";
    input.disabled = false;
    botao.disabled = false;
});
