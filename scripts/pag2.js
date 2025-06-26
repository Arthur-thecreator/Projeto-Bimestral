const body = document.querySelector("body");
const h1 = document.createElement("h1"); // Certifique-se de que há um <h1> no seu HTML para isso funcionar

h1.innerText = "Nos informe o que você deseja."; // O texto do h1 já está aqui

const areaLogo = document.createElement("div");
areaLogo.id = "areaLogo"; // Adiciona um ID para a área da logo

const areaBotoes = document.createElement("div");
areaBotoes.id = "areaBotoes";

// Botões - CORREÇÃO DOS TEXTOS E ATRIBUIÇÃO A VARIÁVEL CORRETA
// Você estava usando 'diagButton' para todos os botões, causando sobrescrita.
// Cada botão deve ter seu próprio nome de variável e texto.

const examesButton = document.createElement("button");
examesButton.innerText = "Acompanhar Exames"; // Corrigido o texto
examesButton.className = "buttons";

const falarMedicoButton = document.createElement("button");
falarMedicoButton.innerText = "Falar diretamente com um médico"; // Corrigido o texto
falarMedicoButton.className = "buttons";

const consultasButton = document.createElement("button");
consultasButton.innerText = "Ver Consultas"; // Corrigido o texto
consultasButton.className = "buttons";

const doencaButton = document.createElement("button");
doencaButton.innerText = "Informar Sintomas"; // Corrigido o texto
doencaButton.className = "buttons";

const imagem = document.createElement("img");
imagem.src = "../images/Logo-saude.jpg"; // Caminho da sua imagem
imagem.id = "imagem"; // Atribui o ID para o CSS

// Anexando os elementos na ordem correta
body.append(h1, areaLogo, areaBotoes); // Primeiro h1, depois a área da logo, depois a área dos botões

areaLogo.append(imagem); // A imagem fica dentro da areaLogo

areaBotoes.append(examesButton, falarMedicoButton, consultasButton, doencaButton); // Anexa os botões à areaBotoes
