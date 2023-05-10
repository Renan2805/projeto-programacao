document.getElementById('btn_login').addEventListener('click', (e) => {
  fetch('http://localhost/user-data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
})