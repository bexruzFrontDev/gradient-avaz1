let inp = document.querySelectorAll('.colors input')
let box = document.querySelector('.box')
let menu = document.querySelector('.select-box select')
let body = document.body
let txt = document.querySelector('.txt')
let btn = document.querySelector('.copy')

function gradientGenerator() {
    const gradient = `linear-gradient(${menu.value}, ${inp[0].value}, ${inp[1].value})`
    box.style.background = gradient
    body.style.background = gradient

    txt.value = `background: ${gradient};`
    console.log(gradient);
}

inp.forEach((el) => {
    el.addEventListener('input', gradientGenerator)
});


function kopiya() {
    navigator.clipboard.writeText(txt.value)
    btn.innerHTML = 'Kopiya qilindi!'

    setTimeout(() => (btn.innerHTML = 'Kopiya qilish'),2000)
}

menu.addEventListener('change', gradientGenerator)
btn.addEventListener('click', kopiya)