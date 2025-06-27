const body = document.querySelector("body");

const areaImagem = document.createElement("div");
areaImagem.id = "areaImagem";

const areaInfoPaciente = document.createElement("div");
areaInfoPaciente.id = "areaInfoPaciente";


const doencaPaciente = document.createElement("section");
doencaPaciente.id = "doencaPaciente";

const doencaPacienteTitle = document.createElement("h3");
doencaPacienteTitle.innerText = "Informações Médicas Relevantes";
doencaPaciente.append(doencaPacienteTitle);

const sintomas = document.createElement("p");
sintomas.innerHTML = "<strong>Sintomas:</strong> Tosse, espirros, dor de cabeça"; 
sintomas.className = "dadosMedicos";
doencaPaciente.append(sintomas); 

const alergiasRemedios = document.createElement("p");
alergiasRemedios.innerHTML = "<strong>Alergias/Remédios:</strong> Dipirona, Polaramine";
alergiasRemedios.className = "dadosMedicos";
doencaPaciente.append(alergiasRemedios); 

const remediosAnteriores = document.createElement("p");
remediosAnteriores.innerHTML = "<strong>Medicações Anteriores:</strong> Flugoral, Tylenol";
remediosAnteriores.className = "dadosMedicos";
doencaPaciente.append(remediosAnteriores); 


const historico = document.createElement("textarea");
historico.placeholder = "Histórico médico relevante"; 
historico.className = "dadosMedicos"; 
historico.rows = 3; 
doencaPaciente.append(historico); 



const nome = document.createElement("textarea");
nome.placeholder = "Nome completo"; 
nome.className = "dadosPaciente";

const altura = document.createElement("textarea");
altura.placeholder = "Altura (ex: 1,70m)"; 
altura.className = "dadosPaciente"; 

const peso = document.createElement("textarea");
peso.placeholder = "Peso (ex: 70 kg)"; 
peso.className = "dadosPaciente";

const verRecomendacoes = document.createElement("select");
verRecomendacoes.id = "verRecomendacoes"; 

const optionDefault = document.createElement("option");
optionDefault.value = "";
optionDefault.textContent = "Selecione uma opção...";
verRecomendacoes.append(optionDefault);
const optionA = document.createElement("option");
optionA.value = "recomenda_a";
optionA.textContent = "Recomendação A";
verRecomendacoes.append(optionA);


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
    altura, 
    peso,
    doencaPaciente, 
    legendaVerOpcoes, 
    verRecomendacoes 
);

const imagem = document.createElement("img");
imagem.src = "../images/homem-doente.jpg"; 
imagem.id = "imagem"; 
imagem.alt = "Homem doente, ilustrando a condição do paciente."; 
areaImagem.append(imagem);


imagem.addEventListener('click', () => {
    doencaPaciente.classList.toggle('active'); 
});