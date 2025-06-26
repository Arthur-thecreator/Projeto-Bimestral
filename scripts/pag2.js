const body = document.querySelector("body");
const h1 = document.createElement("h1"); 

h1.innerText = "Nos informe o que você deseja.";

const areaLogo = document.createElement("div");
areaLogo.id = "areaLogo";

const areaBotoes = document.createElement("div");
areaBotoes.id = "areaBotoes";

const examesButton = document.createElement("button");
examesButton.innerText = "Acompanhar Exames";
examesButton.className = "buttons";

const falarMedicoButton = document.createElement("button");
falarMedicoButton.innerText = "Falar diretamente com um médico";
falarMedicoButton.className = "buttons";

const consultasButton = document.createElement("button");
consultasButton.innerText = "Ver Consultas";
consultasButton.className = "buttons";

const doencaButton = document.createElement("button");
doencaButton.innerText = "Informar Sintomas";
doencaButton.className = "buttons";

const imagem = document.createElement("img");
imagem.src = "../images/Logo-saude.jpg"; 
imagem.alt = "Logo da Saúde"; 
imagem.id = "imagem";


body.append(h1, areaLogo, areaBotoes);

areaLogo.append(imagem);

areaBotoes.append(examesButton, falarMedicoButton, consultasButton, doencaButton);