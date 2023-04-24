
function typeEffect(element, text = '') {
  element.innerText = ''
  var i = 0
  const textInterval = setInterval(() => {
    if (i < text.length) {
      element.innerText = text.substring(0, i + 1) + '|'
      i++
    }
  }, 200)

  return setInterval(() => {
    if(element.innerText == 'Programação' || element.innerText == 'Programação|' ) {
      clearInterval(textInterval)
      if(element.innerText == 'Programação|') element.innerText = 'Programação'
      else element.innerText = 'Programação|'
    }
  }, 1000)
}

const titulo = document.getElementById('section1-title')
const strProg = 'Programação'
const intervalTexto = typeEffect(titulo, strProg)