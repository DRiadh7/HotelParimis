var menu = document.getElementById('menuBurger')
var openMenu = document.getElementById('openMenu')
var closeMenu = document.getElementById('closeMenu')

openMenu.addEventListener('click', function(){
    menu.style = "display: block;"
})
closeMenu.addEventListener('click', function(){
    menu.style = "display: none;"
})