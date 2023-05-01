let stars = document.querySelector('.stars')
let star = stars.children

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener('click', addProgrem)
  star[i].style.opacity = '0.4'
}

function addProgrem(params) {
  reset() //    call reset function
  for (let j = 0; j < this.id; j++) {
    star[j].classList.remove('fa-star-o')
    star[j].classList.add('fa-star')
    star[j].style.opacity = '1'
  }
}

function reset(params) {
  for (let i = 0; i < star.length; i++) {
    star[i].classList.remove('fa-star')
    star[i].classList.add('fa-star-o')
    star[i].style.opacity = '0.4'
  }
}

//  default value

star[0].classList.remove('fa-star-o')
star[0].classList.add('fa-star')
star[0].style.opacity = '1'
