const titulo = document.getElementById('section1-title')

setInterval(() => {
  console.log(titulo.innerText)
  if(titulo.innerText == 'Programação|') titulo.innerText = 'Programação'
  else titulo.innerText = 'Programação|'
}, 1000)
