const botaoMostra = document.querySelector("button")
const listaTintas = document.querySelector(".lista")

botaoMostra.addEventListener("click", () => mostraTintas())

// -----------Solução que não funcionou --------
// function mostraTintas(){
//   if(listaTintas.visibilidade = true){
//     listaTintas.setAttribute("visibilidade", false)
//     listaTintas.style.display = "none"
//                                                            não foi possível modificar mais de uma vez o atributo novo "visibilidade"                                                            
//   } 
//   if(listaTintas.visibilidade = false) {
//     listaTintas.setAttribute("visibilidade", true)   
//     listaTintas.style.display = "unset"
      
//   }
// }

// -------------SOlução que funcionou (com ajuda do ChatGPT) ------------

function mostraTintas(){
    if(listaTintas.style.display === "none"){
      listaTintas.style.display = "block"
      
      
    } else { 
      listaTintas.style.display = "none"
    }
  }