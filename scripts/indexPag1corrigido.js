const body = document.querySelector("body");

const infoUser = document.createElement("div");
infoUser.id = "infoUser"

const sintoma_obs = document.createElement("section");
sintoma_obs.id = "sintomaObs";

const selectSintomas = document.createElement("select");
selectSintomas.id = "seletorSintomas";


const optionDefault = document.createElement("option");
optionDefault.value = "";
optionDefault.textContent = "Selecione...";
selectSintomas.append(optionDefault);

const optionFebre = document.createElement("option");
optionFebre.value = "febre";
optionFebre.textContent = "Febre";
selectSintomas.append(optionFebre);

const optionDorCabeca = document.createElement("option");
optionDorCabeca.value = "dor_cabeca";
optionDorCabeca.textContent = "Dor de Cabeça";
selectSintomas.append(optionDorCabeca);



const legendaSelectSintomas = document.createElement("label");
legendaSelectSintomas.htmlFor = "seletorSintomas";
legendaSelectSintomas.innerText = "Selecione seus sintomas:"; 


const caixaObs = document.createElement("textarea");
caixaObs.id = "caixaObs";
caixaObs.rows = 4; 
caixaObs.placeholder = "Descreva outros sintomas ou observações importantes...";


const legendaCaixaObs = document.createElement("label");
legendaCaixaObs.htmlFor = "caixaObs";
legendaCaixaObs.innerText = "Observações Adicionais:";


const areaEndereco = document.createElement("section");
areaEndereco.id = "areaEndereco"


const legendaEndereco = document.createElement("label");
legendaEndereco.innerText = "Informações de Endereço:"; 

const rua = document.createElement("textarea"); 
rua.placeholder = "Rua, Avenida, etc.";
rua.className = "partesEndereco"
rua.rows = 1; 

const num = document.createElement("textarea"); 
num.placeholder = "Número (ex: 123)";
num.className = "partesEndereco"
num.rows = 1;

const bairro = document.createElement("textarea"); 
bairro.placeholder = "Bairro";
bairro.className = "partesEndereco"
bairro.rows = 1;

const cidade = document.createElement("textarea"); 
cidade.placeholder = "Cidade";
cidade.className = "partesEndereco"
cidade.rows = 1;

const botaoLocalizacao = document.createElement("button");
botaoLocalizacao.innerText = "Usar Minha Localização Atual"; 
botaoLocalizacao.className = "partesEndereco button"; 

const diagButton = document.createElement("button");
diagButton.innerText = "Gerar Diagnóstico / Enviar Informações"; 
diagButton.className = "partesEndereco button"; 


const areaMapa = document.createElement("div");
areaMapa.id = "areaMapa"

const imagem = document.createElement("img");
imagem.src ="../images/imagem-mapa.jpg" 
imagem.alt = "Imagem de um mapa mostrando localização"; 
imagem.id = "imagem"


body.append(infoUser, areaMapa);


infoUser.append(
    sintoma_obs,
    areaEndereco,
    diagButton 
);


sintoma_obs.append(
    legendaSelectSintomas,
    selectSintomas,
    legendaCaixaObs,
    caixaObs
);


areaEndereco.append(
    legendaEndereco,
    rua,
    num,
    bairro,
    cidade,
    botaoLocalizacao
);


areaMapa.append(imagem);

