let switches = document.querySelector('.switch')
let button = switches.children
let demo = document.querySelectorAll('.demo')

const webPath = [
  'D:\\my_portfolio\\img\\web\\webDemo (1).jpg',
  'D:\\my_portfolio\\img\\web\\webDemo (2).jpg',
  'D:\\my_portfolio\\img\\web\\webDemo (3).jpg',
  'D:\\my_portfolio\\img\\web\\webDemo (4).jpg',
  'D:\\my_portfolio\\img\\web\\webDemo (5).jpg',
  'D:\\my_portfolio\\img\\web\\webDemo (6).jpg',
]

const gamePath = [
  'D:\\my_portfolio\\img\\game\\gameDemo (1).jpg',
  'D:\\my_portfolio\\img\\game\\gameDemo (2).jpg',
  'D:\\my_portfolio\\img\\game\\gameDemo (3).jpg',
  'D:\\my_portfolio\\img\\game\\gameDemo (4).jpg',
  'D:\\my_portfolio\\img\\game\\gameDemo (5).jpg',
  'D:\\my_portfolio\\img\\game\\gameDemo (6).jpg',
]

const androidPath = [
  'D:\\my_portfolio\\img\\android\\androidDemo (1).jpg',
  'D:\\my_portfolio\\img\\android\\androidDemo (2).jpg',
  'D:\\my_portfolio\\img\\android\\androidDemo (3).jpg',
  'D:\\my_portfolio\\img\\android\\androidDemo (4).jpg',
  'D:\\my_portfolio\\img\\android\\androidDemo (5).jpg',
  'D:\\my_portfolio\\img\\android\\androidDemo (6).jpg',
]

button[0].style.backgroundColor = '#f70dff'

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function setProperty(params) {
    resetColor()
    this.style.backgroundColor = '#f70dff'
    if (this == button[0]) {
      web()
    } else if (this == button[1]) {
      game()
    } else if (this == button[2]) {
      android()
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
    demo[i].children[0].src = androidPath[i]
  }
}
