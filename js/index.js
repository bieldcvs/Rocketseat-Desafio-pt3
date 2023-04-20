import { handlePlay,handlePause,handleAdd,handleRemove } from "./event-timer.js";
import { handleCafeteira, pauseAudio ,handleChuva, handleNature, handlelareira } from "./event-button.js";

let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let add = document.querySelector('.add')
let remove = document.querySelector('.remove')

play.addEventListener('click',handlePlay)
pause.addEventListener('click',handlePause)
add.addEventListener('click',handleAdd)
remove.addEventListener('click',handleRemove)

let nature = document.querySelector('.nature')
let chuva = document.querySelector('.chuva')
let cafeteira = document.querySelector('.cafeteira')
let lareira = document.querySelector('.lareira')

nature.addEventListener('click',handleNature)
chuva.addEventListener('click',handleChuva)
cafeteira.addEventListener('click',handleCafeteira)
lareira.addEventListener('click', handlelareira )

// LUZ E DARK 
let body = document.querySelector('body')
let luz = document.querySelector('.luz')
let dark = document.querySelector('.dark')


luz.addEventListener('click', ()=> {
  
  dark.classList.toggle('hide')
  luz.classList.toggle('hide')
  body.classList.toggle('darkMode')
  addRemoveClass()
})

dark.addEventListener('click', ()=> {
  
  luz.classList.toggle('hide')
  dark.classList.toggle('hide')
  body.classList.toggle('darkMode')
  addRemoveClassDark()
  
})

function addRemoveClass(){
  nature.classList.remove('press')
  chuva.classList.remove('press')
  cafeteira.classList.remove('press')
  lareira.classList.remove('press')
  pauseAudio()
}
function addRemoveClassDark(){
  nature.classList.remove('pressDark')
  chuva.classList.remove('pressDark')
  cafeteira.classList.remove('pressDark')
  lareira.classList.remove('pressDark')
  pauseAudio()
}
