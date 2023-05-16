const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

let stage = true
elemento.addEventListener("click", () => {stage? (resultado.innerText = "Fui clicado", stage = false) : (resultado.innerText = "", stage = true)})