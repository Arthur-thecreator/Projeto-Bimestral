const body = document.querySelector("body");
const h1 = document.createElement("h1"); 

h1.innerText = "Nos informe o que você deseja.";

const areaLogo = document.createElement("div");
areaLogo.id = "areaLogo";

const areaBotoes = document.createElement("div");
areaBotoes.id = "areaBotoes";

const imagem = document.createElement("img");
imagem.src = "../images/Logo-saude.jpg"; 
imagem.alt = "Logo da Saúde"; 
imagem.id = "imagem";

let button1 = ["Acompanhar exames"];
let button2 = ["Ver consultas", "Informar sintomas", "Falar diretamente com um médico"];


function listaDinamica(ListaComandos) {
    const containerDiv = document.createElement("div"); 
    containerDiv.style.display = 'flex'; 
    containerDiv.style.gap = '25px'; 
    containerDiv.style.flexWrap = 'wrap'; 
    containerDiv.style.justifyContent = 'center'; 

    for (let i = 0; i < ListaComandos.length; i++) {
        let botao = document.createElement("button");
        botao.innerText = ListaComandos[i];
        botao.className = "buttons"; 
        containerDiv.appendChild(botao);
    }
    return containerDiv; 
}

const linha1 = listaDinamica(button1);
areaBotoes.appendChild(linha1);

const linha2 = listaDinamica(button2);
areaBotoes.appendChild(linha2);


body.append(h1, areaLogo, areaBotoes);


areaLogo.append(imagem);