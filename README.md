<h1 align="center">
  🕵️ Jogo da Palavra Secreta
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-Concluido-success?style=for-the-badge" alt="Estado do Projeto">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</p>

<p align="center">
  <strong>Um jogo de adivinhação focado em lógica e experiência do utilizador, com sistema de dicas inteligente.</strong>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-o-que-aprendi">O que aprendi</a> •
  <a href="#-como-executar">Como Executar</a>
</p>

---

## 📷 Demonstração



---

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte dos meus estudos no curso de **Análise e Desenvolvimento de Sistemas (ADS)**. Inspirado em jogos de lógica baseados em texto, o objetivo foi consolidar conceitos fundamentais de JavaScript Vanilla aplicados à construção de interfaces interativas e centradas no utilizador (UX).

---

## ✨ Funcionalidades

- ✅ **Sistema de Dicas Inteligente:** Cada palavra sorteada exibe uma pista contextual e a contagem exata de letras, melhorando a jogabilidade.
- ✅ Sorteio dinâmico a partir de um *Array de Objetos* usando `Math.random()`.
- ✅ Sistema de controlo de tentativas (máximo de 6 erros).
- ✅ Validação de entrada (impede palpites vazios e remove espaços em branco acidentais com `.trim()`).
- ✅ **Acessibilidade:** Suporte à tecla "Enter" para confirmação rápida do palpite.
- ✅ **UX Dinâmica:** O botão de "Jogar Novamente" só fica visível quando a partida termina (vitória ou derrota).

---

## 🧠 O que aprendi

Nesta versão mais avançada do projeto, aprofundei os seguintes conceitos:

* **Estruturas de Dados:** Evolução de um simples *Array* de *Strings* para um **Array de Objetos** `[{palavra, dica}]`, permitindo associar múltiplos dados a um único elemento.
* **Manipulação de DOM Dinâmica:** Utilização de `innerHTML` para injetar texto formatado (como a contagem de letras com a tag `<small>`) diretamente na página.
* **Event Listeners de Teclado:** Captura do evento `keypress` para permitir a jogabilidade sem necessidade de usar o rato.
* **Ciclo de Vida da Aplicação:** Separação da lógica em funções puras e específicas (`iniciarJogo()`, `fazerJogada()`, `finalizarJogo()`), tornando o código mais limpo e profissional.

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone (https://github.com/CaioRO777/cuddly-dollop.git)