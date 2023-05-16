const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const botoes = document.querySelectorAll("[alterar]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => { 
    elemento.addEventListener("click", (evento) => { 
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle) // peca é possível de ser referenciada assim, pois o prefixo data- é suprimido
        // console.log(evento.target.dataset.peca)
        // console.log()
    })
    
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca, operador){
     estatisticas.forEach((atributo) => {
        let valorPeca = parseInt(pecas[peca][atributo.dataset.estatistica])
        if(operador === "-") {
            valorPeca = valorPeca * -1
        }
        atributo.textContent = parseInt(atributo.textContent) + valorPeca
    })
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }

 botoes.forEach((botao) => { 
    botao.addEventListener("click", () => trocaImagem(botao.dataset.cor))
})

//----------- Código Aula 03 ---------------
// const controle = document.querySelectorAll(".controle-ajuste")
// const pecaTitulo = document.querySelectorAll(".peca-titulo")

// controle.forEach((elemento) => { 
//     let sinal = elemento.innerHTML
//     elemento.onclick = () => manipulaDados(sinal)
    
// });


// function manipulaDados(operacao) {
//     if(operacao === "-") {
//         braco.value = parseInt(braco.value) - 1
//     } else {
//         braco.value = parseInt(braco.value) + 1
//     }
// }





// const somar = document.querySelector("#somar")
// const subtrair = document.querySelector("#subtrair")
// const controle = document.querySelectorAll(".controle-ajuste")
// console.log(controle)
// const braco = document.querySelector("#braco")

// function manipulaDados(operacao){
//     if(operacao === "subtrair"){
//         braco.value = parseInt(braco.value) - 1;
//     } else {
//         braco.value = parseInt(braco.value) + 1;
//     }
// }

// somar.addEventListener("click", () => {manipulaDados("somar")})

// subtrair.addEventListener("click", () => {manipulaDados("subtrair")})