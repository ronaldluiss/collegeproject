let abrirmenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
abrirmenu.addEventListener('click', ()=>{
    menu.classList.add('op-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('op-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('op-menu')
})
