/////////////////////////////////////////////////////Seletores ///////////////////////
// getElementById()

const element = document.getElementById('blog-title')

console.log(element)

// getElementByClassName()

const element02 = document.getElementsByClassName('one')
console.log(element02)

// querySelector()

const element03 = document.querySelector('[src]')
console.log(element03)

// querySelectorAll()

const elements = document.querySelectorAll('.one')
console.log(elements)

elements.forEach(el => console.log(el))

/////////////////////////////////////Manipulando conteúdo//////////////////////////////////
// text content
// innerText
const text = document.querySelector('h1')
text.textContent += ' João Marcos'
console.log(text.textContent)

text.innerText = 'preto'

text.innerHTML = 'Olá devs! <small>!!!</small>'

// Manipulando Conteúdo
// value
const input = document.querySelector('input')
console.log(input.value)
input.value = 'outro valor'

// Manipulando elementos
// adicionando atributos
const header = document.querySelector('header')
//adcionar
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID)

// selecionar
console.log(header.getAttribute('id'))

// remover
console.log(header.getAttribute('class'))
header.removeAttribute('class')
console.log(header.getAttribute('class'))
header.setAttribute('class', 'new bg')

////////////////////////////// Alterando estilos com style //////////////////////////

const body = document.querySelector('body')

// setando valores
body.style.backgroundColor = 'gray'

// pegando valores
console.log(body.style.backgroundColor)

/////////////////////////// Alterando estilos com classlist ////////////////////////////

body.classList.add('active', 'green')
body.classList.remove('active')
// body.classList.toggle('active') // se existir : remove / se não existir : adiciona

console.log(body.classList)

///////////////////////////// navegando pelos elementos pais /////////
// parentNode e parentElement

console.log(body.parentElement)

//////////////////////////// navegando pelos elementos filhos ////////
//// childNode e children

console.log(body.childNodes) // OBS : os #text são os epaços vazios
console.log(body.children)

// firstChild e firstElementChidl
console.log(body.firstChild)
console.log(body.firstElementChild)

// lastChild e lastElementChild
console.log(body.lastChild)
console.log(body.lastElementChild)

//////////////////////////// navegando pelos irmãos //////
// nextSimbling e nextElementSimbling

console.log(header.nextSibling)
console.log(header.nextElementSibling)

// previusSimbling e previusElementSimbling
console.log(header.previousSibling)
console.log(text.previousElementSibling)

//////////////////////////////////////// Criando Elementos //////////////////////////
//////// createElement
const div = document.createElement('div')
div.innerText = 'Olá Dev front end'

////// apend prepend

body.append(div) // adiciona no fim
body.prepend(div) //adiciona o inicio do pai

//// inserindo no meio com insertBefore
const div02 = document.createElement('div')
div02.innerText = 'olá devs novamente'
const script = document.querySelector('script')
body.insertBefore(div02, script)

//// simulando insertAfter ( q n existe)
const div03 = document.createElement('div')
div03.innerText = 'loucura louruca cloucrua'
body.insertBefore(div03, header.nextSibling)
