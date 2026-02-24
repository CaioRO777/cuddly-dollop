// Agora usamos uma lista de Objetos (palavra + dica)
const palavrasComDicas = [
    { palavra: "codigo", dica: "Conjunto de instruções escritas por um programador." },
    { palavra: "matriz", dica: "Estrutura de dados em formato de tabela (Array bidimensional)." },
    { palavra: "teclado", dica: "Periférico usado para digitar." },
    { palavra: "janela", dica: "O que a palavra 'Windows' significa em português." },
    { palavra: "motor", dica: "Considerado o coração de um carro." },
    { palavra: "nuvem", dica: "Onde os arquivos da internet ficam 'guardados'." },
    { palavra: "github", dica: "Plataforma famosa de hospedagem de código-fonte." },
    { palavra: "curso", dica: "O que você está fazendo para aprender a programar." }
];

let palavraSecreta = "";
let tentativas = 6;

// Selecionando elementos do DOM
const input = document.getElementById("inputPalpite");
const botaoTentar = document.getElementById("btnTentar");
const resultado = document.getElementById("resultado");
const tentativasRestantes = document.getElementById("tentativasRestantes");
const botaoReiniciar = document.getElementById("btnReiniciar");
const dicaTexto = document.getElementById("dicaTexto"); // Novo elemento capturado

// Função para iniciar ou resetar o jogo
function iniciarJogo() {
    // Sorteia um item aleatório da nossa nova lista
    const sorteio = palavrasComDicas[Math.floor(Math.random() * palavrasComDicas.length)];
    
    // Separa a palavra e a dica
    palavraSecreta = sorteio.palavra;
    dicaTexto.innerHTML = `💡 <strong>Dica:</strong> ${sorteio.dica} <br><small>(Tem ${palavraSecreta.length} letras)</small>`;
    
    tentativas = 6;

    resultado.textContent = "";
    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
    
    input.value = "";
    input.disabled = false;
    botaoTentar.disabled = false;
    
    botaoReiniciar.style.display = "none"; 
    input.focus(); 
}

// Lógica principal da jogada
function fazerJogada() {
    let palpite = input.value.toLowerCase().trim();

    if (palpite === "") {
        resultado.textContent = "⚠️ Digite alguma coisa!";
        resultado.style.color = "#f6c23e"; 
        return;
    }

    tentativas--;

    if (palpite === palavraSecreta) {
        resultado.textContent = "🎉 Parabéns! Você acertou!";
        resultado.style.color = "#1cc88a"; 
        finalizarJogo();
    } else {
        resultado.textContent = `❌ Errado! A palavra não é: ${palpite}`;
        resultado.style.color = "#e74a3b"; 
    }

    if (tentativas <= 0 && palpite !== palavraSecreta) {
        resultado.textContent = `💀 Você perdeu! A palavra era: ${palavraSecreta}`;
        resultado.style.color = "#333";
        finalizarJogo();
    }

    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
    input.value = "";
    input.focus(); 
}

// Função para travar o jogo quando acaba
function finalizarJogo() {
    botaoTentar.disabled = true;
    input.disabled = true;
    botaoReiniciar.style.display = "block"; 
}

// Configurando os cliques nos botões
botaoTentar.addEventListener("click", fazerJogada);
botaoReiniciar.addEventListener("click", iniciarJogo);

// Permitir usar a tecla "Enter" para jogar
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        fazerJogada();
    }
});

// Começa o jogo automaticamente
iniciarJogo();