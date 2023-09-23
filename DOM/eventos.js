// Eventos
function print() {
  console.log('print')
}

const input = document.querySelector('input')

// eventos de teclado

input.onkeydown = function () {
  console.log('rodei')
}

// Adicionando eventos via JS
const h1 = document.querySelector('h1')

h1.addEventListener('click', print2)

function print2() {
  console.log('print 2')
}

// outra maneira

h1.onclick = print3

function print3() {
  console.log('um momento')
}

h1.onclick = function joao() {
  console.log('outro momento')
}

// use o addEventListener , é mais recomendado

// argumento event
//

input.onkeyup = function (event) {
  console.log(event)
}

input.onclick = function (event) {
  console.log(event)
}

input.onkeydown = function (event) {
  console.log(event.currentTarget)
}
