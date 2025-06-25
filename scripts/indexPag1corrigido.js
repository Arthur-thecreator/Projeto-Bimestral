const body = document.querySelector("body");

const dicPrincipal = document.createElement("div")

const infoUser = document.createElement("div");
infoUser.id = "infoUser"

// Seção de sintomas e observações
const sintoma_obs = document.createElement("section");
sintoma_obs.id = "sintomaObs";

const selectSintomas = document.createElement("select");
selectSintomas.id = "seletorSintomas";

// Label para o seletor de sintomas
const legendaSelectSintomas = document.createElement("label");
legendaSelectSintomas.htmlFor = "seletorSintomas";
legendaSelectSintomas.innerText = "Selecione seus sintoma:";

// Caixa de observações
const caixaObs = document.createElement("textarea");
caixaObs.id = "caixaObs";

//label para caixa de observações
const legendaCaixaObs = document.createElement("label");
legendaCaixaObs.htmlFor = "caixaObs";
legendaCaixaObs.innerText = "Colocar observações";

// Seção de endereço
const areaEndereco = document.createElement("section");
areaEndereco.id = "areaEndereco"

// Label e inputs separados para cada campo de endereço
const legendaEndereco = document.createElement("label");
legendaEndereco.innerText = "Endereço:";

const rua = document.createElement("textarea");
rua.placeholder = "Rua";
rua.className = "partesEndereco"

const num = document.createElement("textarea");
num.placeholder = "Número";
num.className = "partesEndereco"

const bairro = document.createElement("textarea");
bairro.placeholder = "Bairro";
bairro.className = "partesEndereco"

const cidade = document.createElement("textarea");
cidade.placeholder = "Cidade";
cidade.className = "partesEndereco"

const botaoLocalizacao = document.createElement("button");
botaoLocalizacao.innerText = "Usar Localização";
botaoLocalizacao.className = "partesEndereco"

const diagButton = document.createElement("button");
diagButton.innerText = "Gerar Diagnóstico";
diagButton.className = "partesEndereco"

// Seção de mapa
const areaMapa = document.createElement("div");
areaMapa.id = "areaMapa"

const imagem = document.createElement("img");
imagem.src ="../images/imagem-mapa.jpg"
imagem.id = "imagem"

// Montando a hierarquia
body.append(infoUser, areaMapa);

infoUser.append(sintoma_obs, areaEndereco, diagButton);

selectSintomas.append(); 
sintoma_obs.append(legendaSelectSintomas, selectSintomas,legendaCaixaObs, caixaObs);

areaMapa.append(imagem);

areaEndereco.append(
  legendaEndereco,
  rua,
  num,
  bairro,
  cidade,
  botaoLocalizacao
);


