function isLogged() {
    const isLogged = sessionStorage.getItem('isLogged') == 'true' ? true : false

    if(isLogged) {
        window.location.href = '/pages/dashboard/index.html'
    }
}