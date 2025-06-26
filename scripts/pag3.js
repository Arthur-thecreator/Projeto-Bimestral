const body = document.querySelector("body");

const areaImagem = document.createElement("div");
areaImagem.id = "areaImagem";

const areaInfoPaciente = document.createElement("div");
// Correção: ID deve ser "areaInfoPaciente" para corresponder ao CSS
areaInfoPaciente.id = "areaInfoPaciente"; 

const nome = document.createElement("textarea");
nome.placeholder = "Nome completo"; // Placeholder mais descritivo
nome.className = "dadosPaciente";

const historico = document.createElement("textarea");
historico.placeholder = "Histórico médico relevante"; // Placeholder mais descritivo
historico.className = "dadosPaciente";

const peso = document.createElement("textarea");
peso.placeholder = "Peso (ex: 70 kg)"; // Placeholder mais descritivo
peso.className = "dadosPaciente";

const verRecomendacoes = document.createElement("select");
verRecomendacoes.id = "verRecomendacoes"; 

// Exemplo de como adicionar opções ao select, se necessário:
// const option1 = document.createElement("option");
// option1.value = "opcao1";
// option1.textContent = "Opção 1";
// verRecomendacoes.appendChild(option1);

const legendaAreaInfoPaciente = document.createElement("label");
legendaAreaInfoPaciente.htmlFor = "areaInfoPaciente"; // Conecta o label ao contêiner
legendaAreaInfoPaciente.innerText = "Dados do Paciente"; // Texto do label
legendaAreaInfoPaciente.className = "legendas";

const legendaVerOpcoes = document.createElement("label");
legendaVerOpcoes.htmlFor = "verRecomendacoes"; // Conecta o label ao select
legendaVerOpcoes.innerText = "Ver Recomendações da IA"; // Texto do label
legendaVerOpcoes.className = "legendas";

// Anexa os contêineres principais ao body.
// areaInfoPaciente primeiro para ficar à esquerda, areaImagem depois para ficar à direita.
body.append(areaInfoPaciente, areaImagem);

// Anexa os elementos à areaInfoPaciente
areaInfoPaciente.append(
    legendaAreaInfoPaciente,
    nome,
    historico,
    peso,
    legendaVerOpcoes, // Primeiro o label
    verRecomendacoes // Depois o select
);

// Adicionando uma imagem de exemplo na areaImagem
const imagem = document.createElement("img");
imagem.src = "../images/homem-doente.jpg"; // Imagem de placeholder
imagem.id = "imagem"; // Atribui o ID para o CSS
areaImagem.append(imagem); // Anexa a imagem à areaImagem

