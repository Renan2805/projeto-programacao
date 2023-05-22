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