
const text = ['Thanh Tùng🐧', 'Mai Thanh Tùng🐧', 'Bậc Ông Cố Nội🐧']
const colors = ['White', 'Yellow', 'Aqua']
let ele = document.querySelector('#animated-inner-text')
let i = -1

ele.innerText = text[text.length - 1] + ' ... '
ele.style.color = colors[colors.length - 1]
ele.style.textShadow = '1px 1px 3px ' + colors[colors.length - 1]
  //  space mendetory after 'px' in the top line 

function textColorShow(params) {
    i++
    ele.innerText = text[i] + ' ... '
    ele.style.color = colors[i]
    ele.style.textShadow = '1px 1px 3px ' +  colors[i]
    //  space mendetory after 'px' in the top line 

    if (i == text.length - 1) {
        i = -1
    }
}

setInterval(textColorShow, 5000)






