var userData = JSON.parse(sessionStorage.userData)
ipt_username.value = userData.nomeUsuario

var clearFeedbackInterval;

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

function desfavoritarLinguagem(id) {
  fetch('/linguagens/desfavoritar', {
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
      return res.json()
    }
  }).then(result => {
    console.log(result)
    if(result.affectedRows > 0) {
      alert('ok')
    }
    toggleLoader()
  }).catch(e => console.error(e))
}

function favoritarLinguaem(id) {
  fetch('/linguagens/favoritar', {
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
      return res.json()
    }
  }).then(result => {
    console.log(result)
    if(result.affectedRows > 0) {
      alert('ok')
    }
    toggleLoader()
  }).catch(e => console.error(e))
}

verificarLinguagens()

async function atualizarNome() {
  toggleLoader()
  var nome = ipt_username.value

  if(nome == '' || nome.length < 3) {
    alert('Username inválido')
    return
  }

  if(nome == userData.nomeUsuario) {
    showFeedbackMessage('Nome de usuario igual ao atual', true)
    toggleLoader()
    return
  }

  var fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      idUsuario: userData.idUsuario,
      nome: nome
    })
  }

  var response = await fetch('/usuarios/atualizar-nome', fetchOptions)
    .then(res => {
      if(res.ok) {
        return res.json()
      }
    }).catch(e => console.error(e))

  if(response.changedRows == 1) {
    alert('nome alterado com sucesso')
    userData.nomeUsuario = nome
    console.log(userData)
    sessionStorage.setItem('userData', JSON.stringify(userData))
  }

  toggleLoader()
  console.log(response)
}

function showFeedbackMessage(message, bad) {
  if(clearFeedbackInterval) {
    clearInterval(clearFeedbackInterval)
  }

  feedback_msg.innerText = message
  feedback_msg.style.color = bad ? 'red' : 'green'

  clearFeedbackInterval = setTimeout(() => {
    feedback_msg.innerText = ''
  }, 5000)
}

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