
function typeEffect(element, text = '', speed = 150) {
  element.innerText = ''
  var i = 0
  const textInterval = setInterval(() => {
    if (i < text.length) {
      element.innerText = text.substring(0, i + 1) + '|'
      i++
    }
  }, speed)

  return setInterval(() => {
    const currrentText = element.innerText

    if(currrentText == text || currrentText == `${text}|`) {
      clearInterval(textInterval)
      if(currrentText[currrentText.length - 1] == '|') {
        element.innerText = text
      } else {
        element.innerText = `${text}|`
      }
    }

  }, 1000)
}

const titulo = document.getElementById('section1-title')
const strProg = 'Programação'
const intervalTexto = typeEffect(titulo, strProg)