function isLogged() {
  const isLogged = sessionStorage.isLogged

  console.log(typeof isLogged, isLogged)

  if(isLogged == 'true' && window.location.href != '/pages/dashboard/index.html') {
    window.location.href = '/pages/dashboard/index.html'
  }
}