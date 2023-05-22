isLogged()

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

const ctx = document.getElementById('chart-pizza');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        '10/10',
        '08/10',
        '07/10'
      ],
      datasets: [{
        label: 'Quantidade de notas',
        data: [13, 22, 17],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    }
  });


  document.getElementById('btn_sair').addEventListener('click', () => {
    sessionStorage.removeItem('userData')
    sessionStorage.setItem('isLogged', false)
    window.location.href = '/'
  })