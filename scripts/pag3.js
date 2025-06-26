const body = document.querySelector("body");

const areaImagem = document.createElement("div");
areaImagem.id = "areaImagem";

const areaInfoPaciente = document.createElement("div");

areaInfoPaciente.id = "areaInfoPaciente"; 

const nome = document.createElement("textarea");
nome.placeholder = "Nome completo"; 
nome.className = "dadosPaciente";

const historico = document.createElement("textarea");
historico.placeholder = "Histórico médico relevante"; 
historico.className = "dadosPaciente";

const peso = document.createElement("textarea");
peso.placeholder = "Peso (ex: 70 kg)"; 
peso.className = "dadosPaciente";

const verRecomendacoes = document.createElement("select");
verRecomendacoes.id = "verRecomendacoes"; 



const legendaAreaInfoPaciente = document.createElement("label");
legendaAreaInfoPaciente.htmlFor = "areaInfoPaciente"; 
legendaAreaInfoPaciente.innerText = "Dados do Paciente"; 
legendaAreaInfoPaciente.className = "legendas";

const legendaVerOpcoes = document.createElement("label");
legendaVerOpcoes.htmlFor = "verRecomendacoes"; 
legendaVerOpcoes.innerText = "Ver Recomendações da IA"; 
legendaVerOpcoes.className = "legendas";


body.append(areaInfoPaciente, areaImagem);


areaInfoPaciente.append(
    legendaAreaInfoPaciente,
    nome,
    historico,
    peso,
    legendaVerOpcoes, 
    verRecomendacoes 
);


const imagem = document.createElement("img");
imagem.src = "../images/homem-doente.jpg"; 
imagem.id = "imagem"; 
areaImagem.append(imagem);

