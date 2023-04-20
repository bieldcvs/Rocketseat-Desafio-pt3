let audioNature = document.querySelector('.audio-nature')
let nature = document.querySelector('.nature')
let audioChuva = document.querySelector('.audio-chuva')
let chuva = document.querySelector('.chuva')
let audiolareira = document.querySelector('.audio-lareira')
let lareira = document.querySelector('.lareira')
let audioCafeteira = document.querySelector('.audio-cafeteira')
let cafeteira = document.querySelector('.cafeteira')

let luz = document.querySelector('.luz')
let dark = document.querySelector('.dark')


export function pauseAudio() {
  audioNature.pause()
  audioChuva.pause()
  audiolareira.pause()
  audioCafeteira.pause()
}

export function handleNature() {
  const volumeControl = document.querySelector('#volumeNature')
 

  if(!luz.classList.contains('hide')){
  nature.classList.add('press')
  chuva.classList.remove('press')
  lareira.classList.remove('press')
  cafeteira.classList.remove('press')
  
}
if(luz.classList.contains('hide')){
nature.classList.add('pressDark')
chuva.classList.remove('pressDark')
lareira.classList.remove('pressDark')
cafeteira.classList.remove('pressDark')
}
audioNature.play()
audioChuva.pause()
audiolareira.pause()
audioCafeteira.pause()

  volumeControl.addEventListener('input',()=>{
  audioNature.volume = volumeControl.value / 100
})


}
export function handleChuva() {
  const volumeControl = document.querySelector('#volumeChuva')
 
  if(!luz.classList.contains('hide')){
  nature.classList.remove('press')
  chuva.classList.add('press')
  lareira.classList.remove('press')
  cafeteira.classList.remove('press')
  }
  if(luz.classList.contains('hide')){
  nature.classList.remove('pressDark')
  chuva.classList.add('pressDark')
  lareira.classList.remove('pressDark')
  cafeteira.classList.remove('pressDark')
  }
  audioNature.pause()
  audioChuva.play()
  audiolareira.pause()
  audioCafeteira.pause()
  volumeControl.addEventListener('input',()=>{
    audioChuva.volume = volumeControl.value / 100
  })
    
}
export function handlelareira() {
  const volumeControl = document.querySelector('#volumeLareira')
 

  if(!luz.classList.contains('hide')){
  nature.classList.remove('press')
  chuva.classList.remove('press')
  lareira.classList.add('press')
  cafeteira.classList.remove('press')
  }
  if(luz.classList.contains('hide')){
  nature.classList.remove('pressDark')
  chuva.classList.remove('pressDark')
  lareira.classList.add('pressDark')
  cafeteira.classList.remove('pressDark')
  }
  audioNature.pause()
  audioChuva.pause()
  audiolareira.play()
  audioCafeteira.pause()

  volumeControl.addEventListener('input',()=>{
    audiolareira.volume = volumeControl.value / 100
  })
    
}
export function handleCafeteira() {
  const volumeControl = document.querySelector('#volumeCafeteira')

  if(!luz.classList.contains('hide')){
  nature.classList.remove('press')
  chuva.classList.remove('press')
  lareira.classList.remove('press')
  cafeteira.classList.add('press')
  }
  if(luz.classList.contains('hide')){
  nature.classList.remove('pressDark')
  chuva.classList.remove('pressDark')
  lareira.classList.remove('pressDark')
  cafeteira.classList.add('pressDark')
  }
  audioNature.pause()
  audioChuva.pause()
  audiolareira.pause()
  audioCafeteira.play()

  volumeControl.addEventListener('input',()=>{
    audioCafeteira.volume = volumeControl.value / 100
  })
    
}

