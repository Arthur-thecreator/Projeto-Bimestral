const body = document.querySelector("body");

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

const num = document.createElement("textarea");
num.placeholder = "Número";

const bairro = document.createElement("textarea");
bairro.placeholder = "Bairro";

const cidade = document.createElement("textarea");
cidade.placeholder = "Cidade";

const botaoLocalizacao = document.createElement("button");
botaoLocalizacao.innerText = "Usar Localização";

// Seção de mapa e botão de diagnóstico
const mapa = document.createElement("section");

const diagButton = document.createElement("button");
diagButton.innerText = "Gerar Diagnóstico";

// Montando a hierarquia
body.append(infoUser);

infoUser.append(sintoma_obs, areaEndereco, mapa, diagButton);

selectSintomas.append(); 
sintoma_obs.append(legendaSelectSintomas, selectSintomas,legendaCaixaObs, caixaObs);

areaEndereco.append(
  legendaEndereco,
  rua,
  num,
  bairro,
  cidade,
  botaoLocalizacao
);


