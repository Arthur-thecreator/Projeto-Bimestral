const body = document.querySelector("body")

const h1 = document.querySelector("h1")
h1.innerText = "Nos informe o que você deseja."

const areaLogo = document.createElement("div")

const areaBotoes = document.createElement("div")
areaBotoes.id = "areaBotoes"

const examesButton = document.createElement("button")
diagButton.innerText = "Acompanhar Exames"
diagButton.className = "buttons"

const falarMedicoButton = document.createElement("button")
diagButton.innerText = "Falare diretamente com um médico"
diagButton.className = "buttons"

const consultasButton = document.createElement("button")
diagButton.innerText = "Ver consultas"
diagButton.className = "buttons"

const doencaButton = document.createElement("button")
diagButton.innerText = "Informar Sintomas"
diagButton.className = "buttons"

const imagem = document.createElement("img");
imagem.src = "../images/homem-doente.jpg"; // Imagem de placeholder
imagem.id = "imagem"; // Atribui o ID para o CSS
areaImagem.append(imagem); // Anexa a imagem à areaImagem


areaBotoes.append(examesButton, falarMedicoButton, consultasButton, doencaButton)

areaLogo.append(imagem)
