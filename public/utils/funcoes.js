function isLogged() {
  const isLogged = sessionStorage.isLogged == 'true' ? true : false

  if(isLogged && window.location.href != 'http://localhost:3333/pages/dashboard/index.html') {
    window.location.href = '/pages/dashboard/index.html'
    return
  }

  const notLoggedPages = [
    'http://localhost:3333/',
    'http://localhost:3333/login',
    'http://localhost:3333/cadastrar'
  ]

  if(!isLogged && !notLoggedPages.includes(window.location.href)) {
    window.location.href = '/'
    return
  }
}