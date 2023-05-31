var userData = JSON.parse(sessionStorage.userData)
var loaderShown = false
loader.style.display = 'none'

function toggleLoader() {
  if(loaderShown) {
    loader.style.display = 'none'
    loaderShown = false
  } else {
    loader.style.display = 'flex'
    loaderShown = true
  }
}

async function fetchLinguagensFavoritas() {
  const linguagens = await fetch(`/linguagens/favoritas/${userData.idUsuario}`).then(res => res.json())

  return linguagens
}

function verificarLinguagens() {
  document.querySelectorAll('.linguagem > input').forEach(ipt => ipt.checked = false)

  fetchLinguagensFavoritas().then(linguagens => {
    linguagens.forEach(l => {
      document.getElementById(`ipt_${l.idLinguagem}`).checked = true
    })
  })
}

function atualizarLinguagens(idIpt) {
  toggleLoader()
  const input = document.getElementById(idIpt)
  if (input.checked) {
    favoritarLinguaem(idIpt.substring(4))
  } else {
    desfavoritarLinguagem(idIpt.substring(4))
  }

}

async function desfavoritarLinguagem(id) {
  var result = await fetch('/linguagens/desfavoritar', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      idUsuario: userData.idUsuario,
      idLinguagem: id
    })
  }).then(res => {
    if(res.ok) {
      res.json()
    }
  }).catch(e => console.error(e))
  toggleLoader()
  console.log(result)
}

async function favoritarLinguaem(id) {
  var result = await fetch('/linguagens/favoritar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      idUsuario: userData.idUsuario,
      idLinguagem: id
    })
  }).then(res => {
    if(res.ok) {
      res.json()
    }
  }).catch(e => console.error(e))
  toggleLoader()
  console.log(result)
}

verificarLinguagens()

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

document.querySelectorAll('#btn_sair').forEach(btn => btn.addEventListener('click', () => {
  sessionStorage.removeItem('userData')
  sessionStorage.setItem('isLogged', false)
  window.location.href = '/'
}))