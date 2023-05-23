// If the user is not logged, redirect to the index page
isLogged()

var sessionUserData = JSON.parse(sessionStorage.getItem('userData'))
console.log(sessionUserData)

getUserData(sessionUserData.idUsuario)

async function getUserData(userId) {
  try {
    const user = await fetch(`/usuarios/${userId}`).then(res => res.json())
    const tentativas = await fetch(`/usuarios/tentativas/${userId}`).then(res => res.json())
    renderTentativas(tentativas)

    const dadosGraficoPizza = await fetch(`/analytcs/qtdNotas/${userId}`).then(res => res.json())
    var chartPizza = criarGrafico(document.getElementById('chart-pizza'), {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Quantidade de notas',
          data: [],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    }, dadosGraficoPizza)

    setInterval(() => {
      updateGrafico(chartPizza, dadosGraficoPizza)
    }, 2000);

  } catch (error) {
    console.error('ERRO! ', error)
  }
}

function renderTentativas(tentativas) {
  const table = document.getElementById('lista-tentativas')
  
  table.innerHTML = ''
  tentativas.forEach(t => {
    table.innerHTML += `
      <tr>
        <td>${t.pontuacao}/10</td>
        <td>${t.nome}</td>
        <td>${t.tempo}</td>
      </tr>
    `
  })
}

function criarGrafico(ctx, options, dados) {
  var g = new Chart(ctx, options);

  g.data.labels = dados.map(d => d.label.toString())
  g.data.datasets[0].data = dados.map(d => d.dado)
  g.update()

  return g
}

function updateGrafico(grafico, dados) {

  if(grafico.data.datasets[0].data != dados.map(d => d.dado)) {
    grafico.data.labels = dados.map(d => d.label.toString())
    grafico.data.datasets[0].data = dados.map(d => d.dado)
    grafico.update()
  }
}


// EVENT LISTENERS -------------------------

var spans = document.querySelectorAll('.link-side-bar > span')

var sideBar = document.getElementById('side_bar')
sideBar.addEventListener('mouseenter', () => {
  sideBar.classList.add('side-bar-open')
  spans.forEach(span => span.classList.add('side-bar-text-shown'))
})

sideBar.addEventListener('mouseleave', () => {
  sideBar.classList.remove('side-bar-open')
  spans.forEach(span => span.classList.remove('side-bar-text-shown'))
})

document.getElementById('btn_sair').addEventListener('click', () => {
  sessionStorage.removeItem('userData')
  sessionStorage.setItem('isLogged', false)
  window.location.href = '/'
})