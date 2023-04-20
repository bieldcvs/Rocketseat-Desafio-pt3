
let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let timerPause

function updateDisplay(minutes , seconds) {
      displayMinutes.textContent = String(minutes).padStart(2,'0')
      displaySeconds.textContent = String(seconds - 1).padStart(2,'0')
}

function timer(){
   timerPause = setTimeout(() => {
    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)

    if ( minutes <= 0 && seconds <= 0){
      minutes = prompt("Digite o os minutos para adicionar ao cronometro : ")
      if(!minutes){
        minutes = 0
      }
      displayMinutes.textContent = String(minutes).padStart(2,"0")
      return
    }
    if (seconds <= 0){
      minutes--
      seconds = 60
    }

    updateDisplay(minutes,seconds)
    timer()
  }, 1000);
}

export function handlePlay() {
  timer()
}

export function handlePause(){
  clearTimeout(timerPause)
}

export function handleAdd(){  
  displayMinutes.textContent = String(Number(displayMinutes.textContent) + 5).padStart(2,"0")
  console.log(displayMinutes.textContent)
}

export function handleRemove(){
  let teste = (displayMinutes.textContent - 5) < 0 
  if( teste ){
    alert("Não e possivel remover 5 minutos ")
    return
  }
  displayMinutes.textContent = String(Number(displayMinutes.textContent) - 5).padStart(2,"0")
}