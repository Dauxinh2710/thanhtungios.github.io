document.body.setAttribute('onscroll', 'scrolling()')

function scrolling(params) {
  if (document.documentElement.scrollTop > 20) {
    btn.style.display = 'block'
  } else {
    btn.style.display = 'none'
  }
}
