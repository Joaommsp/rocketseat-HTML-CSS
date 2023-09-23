const button = document.querySelector('#openModal')
const div = document.querySelector('#modal')

button.addEventListener('click', click)
div.addEventListener('onkeyup', sair)

function click() {
  div.classList.remove('invisible')
}

function sair() {
  console.log('clicou')
}

document.onkeydown = function (e) {
  if (e.key === 'Escape') {
    div.classList.add('invisible')
  }
}
