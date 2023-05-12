document.getElementById('btn_login').addEventListener('click', (e) => {
  e.preventDefault()
  fetch('/usuarios/autenticar', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: ipt_user.value,
      password: ipt_password.value
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
})