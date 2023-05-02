let switches = document.querySelector('.switch')
let button = switches.children
let demo = document.querySelectorAll('.demo')

const webPath = [
  './img/github.png',
  './img/github.png',
]

const gamePath = [
  './img/hentaiz.png',
  './img/hentaiz.png',
]

const applePath = [
  './img/apple.png',
  './img/apple.png',
]

button[0].style.backgroundColor = '#00FFFF'

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function setProperty(params) {
    resetColor()
    this.style.backgroundColor = '#00FFFF'
    if (this == button[0]) {
      web()
    } else if (this == button[1]) {
      game()
    } else if (this == button[2]) {
      apple()
    }
  })
}

function resetColor(params) {
  for (let i = 0; i < button.length; i++) {
    button[i].style.background = 'none'
  }
}

function web(params) {
  for (let i = 0; i < demo.length; i++) {
    demo[i].children[0].src = webPath[i]
  }
}

web()

function game(params) {
  for (let i = 0; i < demo.length; i++) {
    demo[i].children[0].src = gamePath[i]
  }
}

function android(params) {
  for (let i = 0; i < demo.length; i++) {
    demo[i].children[0].src = appledPath[i]
  }
}
