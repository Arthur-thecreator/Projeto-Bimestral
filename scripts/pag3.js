const body = document.querySelector("body")

const areaImagem = document.createElement("div")

const areaInfoPaciente = document.createElement("div")

const nome = document.createElement("textarea")
nome.placeholder = "nome"
nome.className = "dadosPaciente"

const historico = document.createElement("textarea")
historico.placeholder = "historico"
historico.className = "dadosPaciente"

const peso = document.createElement("textarea")
peso.placeholder = "peso"
peso.className = "dadosPaciente"

const verRecomendacoes = document.createElement("select")
verRecomendacoes.id = "verRecomendações"

const legendaAreaInfoPaciente = document.createElement("label")
legendaAreaInfoPaciente.htmlFor = "area de informações do paciente"
legendaAreaInfoPaciente.innerText = "Dados do paciente"

const legendaVerOpcoes = document.createElement("label")
legendaVerOpcoes.htmlFor = "area de recomedacoes"
legendaVerOpcoes.innerText = "ver recomendações da IA"

body.append(areaImagem, areaInfoPaciente)

areaInfoPaciente.append(legendaAreaInfoPaciente, nome, historico, peso, verRecomendacoes, legendaVerOpcoes)

legendaVerOpcoes.append(verRecomendacoes)