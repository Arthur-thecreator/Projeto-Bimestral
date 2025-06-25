const body = document.querySelector("body")

const infoUser = document.createElement("div")
    const sintoma_obs = document.createElement("section")
    sintoma_obs.id = "sintomaObs"

        const selectSintomas = document.createElement("selector")
        selectSintomas.id = "seletorSintomas"

            const legendaSelectSintomas = document.createElement("label")
            legendaSelectSintomas = "legendaSelectSintomas"

        const caixaObs = document.createElement("textarea")
        caixaObs.id = "caixaObs"
    
    const areaEndereco = document.createElement("section")
        const legendaEndereco = document.createElement("label")
            const rua = document.createElement("textarea")
            const num = document.createElement("textarea")
            const bairro = document.createElement("textarea")
            const cidade = document.createElement("textarea")
            const botaoLocalizacao = document.createElement("button")



const mapa = document.createElement("section")

const diagButton = document.createElement("button")

sintoma_obs.append(selectSintomas, caixaObs)
selectSintomas.append(legendaSelectSintomas)
areaEndereco.append(legendaEndereco)
legendaEndereco.append(rua, num, bairro, cidade, botaoLocalizacao)