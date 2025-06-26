const body = document.querySelector("body");

// Não precisamos de dicPrincipal se não for usado para nada.
// const dicPrincipal = document.createElement("div")

const infoUser = document.createElement("div");
infoUser.id = "infoUser"

// Seção de sintomas e observações
const sintoma_obs = document.createElement("section");
sintoma_obs.id = "sintomaObs";

const selectSintomas = document.createElement("select");
selectSintomas.id = "seletorSintomas";

// Sugestão: Adicione algumas opções ao select para ele não ficar vazio
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


// Label para o seletor de sintomas
const legendaSelectSintomas = document.createElement("label");
legendaSelectSintomas.htmlFor = "seletorSintomas";
legendaSelectSintomas.innerText = "Selecione seus sintomas:"; // Plural para ser mais genérico

// Caixa de observações
const caixaObs = document.createElement("textarea");
caixaObs.id = "caixaObs";
caixaObs.rows = 4; // Define um número inicial de linhas
caixaObs.placeholder = "Descreva outros sintomas ou observações importantes...";

//label para caixa de observações
const legendaCaixaObs = document.createElement("label");
legendaCaixaObs.htmlFor = "caixaObs";
legendaCaixaObs.innerText = "Observações Adicionais:";

// Seção de endereço
const areaEndereco = document.createElement("section");
areaEndereco.id = "areaEndereco"

// Label e inputs separados para cada campo de endereço
const legendaEndereco = document.createElement("label");
legendaEndereco.innerText = "Informações de Endereço:"; // Texto mais claro

const rua = document.createElement("textarea"); // Textarea para rua? Um input tipo text seria mais comum.
rua.placeholder = "Rua, Avenida, etc.";
rua.className = "partesEndereco"
rua.rows = 1; // Para que se pareça mais com um input de linha única

const num = document.createElement("textarea"); // Novamente, input type="number" seria melhor.
num.placeholder = "Número (ex: 123)";
num.className = "partesEndereco"
num.rows = 1;

const bairro = document.createElement("textarea"); // Input type="text"
bairro.placeholder = "Bairro";
bairro.className = "partesEndereco"
bairro.rows = 1;

const cidade = document.createElement("textarea"); // Input type="text"
cidade.placeholder = "Cidade";
cidade.className = "partesEndereco"
cidade.rows = 1;

const botaoLocalizacao = document.createElement("button");
botaoLocalizacao.innerText = "Usar Minha Localização Atual"; // Texto mais amigável
botaoLocalizacao.className = "partesEndereco button"; // Adicionei 'button' para o estilo CSS

const diagButton = document.createElement("button");
diagButton.innerText = "Gerar Diagnóstico / Enviar Informações"; // Texto mais completo
diagButton.className = "partesEndereco button"; // Mantenho 'button' para o estilo, mas pode ser outra classe

// Seção de mapa
const areaMapa = document.createElement("div");
areaMapa.id = "areaMapa"

const imagem = document.createElement("img");
imagem.src ="../images/imagem-mapa.jpg" // Certifique-se de que este caminho está correto!
imagem.alt = "Imagem de um mapa mostrando localização"; // Texto alternativo para acessibilidade
imagem.id = "imagem"

// Montando a hierarquia no Body
body.append(infoUser, areaMapa);

// Montando a hierarquia dentro de infoUser
infoUser.append(
    sintoma_obs,
    areaEndereco,
    diagButton // Botão de diagnóstico fica por último em infoUser
);

// Montando a hierarquia dentro de sintoma_obs
sintoma_obs.append(
    legendaSelectSintomas,
    selectSintomas,
    legendaCaixaObs,
    caixaObs
);

// Montando a hierarquia dentro de areaEndereco
areaEndereco.append(
    legendaEndereco,
    rua,
    num,
    bairro,
    cidade,
    botaoLocalizacao
);

// Anexando a imagem à areaMapa
areaMapa.append(imagem);

