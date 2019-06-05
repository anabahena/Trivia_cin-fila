const inputName = document.getElementById("input-name");
const buttonName = document.getElementById("button-name");
const content = document.getElementById("content");
const sectionApppear = document.getElementById("section-appear");
const primerSection = document.getElementById("primer-section");
const buttonFantasy = document.getElementById("button-fantasy");
const buttonTerror = document.getElementById("button-terror");
const cuestionOneFantasy = document.getElementById("cuestion1-fantasy");
const cuestionOneTerror = document.getElementById("cuestion1-terror");
const buttonAfantasy= document.getElementById ("buttonA-fantasy")

const getName = () =>{
  primerSection.classList.add("desappear");
  sectionApppear.classList.remove("desappear");
  content.innerHTML = "¡Hola, Bienvenida! " + inputName.value

}
const getCuestionFantasy = () =>{
  cuestionOneFantasy.innerHTML = "1. ¿En qué año se estreno la película La historia sin fin? <br/><button id='buttonA-fantasy'>A. 1987</button><br><button id= 'buttonB-fantasy'>B. 2008</button><br/><button 'buttonC-fantasy'> C. 1990</button>"

}


const getCuestionTerror = () =>{
  cuestionOneTerror.innerHTML = "1. ¿Cuál de estas películas pertenece al género de Terror? <br/><button id='buttonA-Terror'>A. Monster Inc.</button> <br/><button id='buttonB-fantasy'>B. El resplandor</button><br/><button id='buttonC-fantasy'>C. Frankewinie</button>"
}


buttonTerror.addEventListener("click", getCuestionTerror)
buttonFantasy.addEventListener("click", getCuestionFantasy)
buttonName.addEventListener("click", getName)
