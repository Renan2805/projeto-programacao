document.getElementById('btn_cadastro').addEventListener('click', (e) => {
    e.preventDefault()
    const nome = ipt_user.value
    const email = ipt_email.value
    const senha = ipt_senha.value
    
    fetch('/usuarios/cadastrar', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: nome,
        email: email,
        password: senha
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  })