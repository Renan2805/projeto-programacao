function isLogged() {
  const isLogged = sessionStorage.isLogged

  console.log(typeof isLogged, isLogged)

  console.log(window.location.href)

  if(isLogged == 'true' && window.location.href != 'http://localhost:3333/pages/dashboard/index.html') {
    window.location.href = '/pages/dashboard/index.html'
    return
  }

  const notLoggedPages = [
    'http://localhost:3333/',
    'http://localhost:3333/login',
    'http://localhost:3333/cadastrar'
  ]

  if(isLogged == 'false' && !notLoggedPages.includes(window.location.href)) {
    window.location.href = '/'
    console.log('aaaaaaa')
    return
  }
}