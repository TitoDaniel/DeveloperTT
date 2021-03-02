const menunav = document.querySelector('.menunav')
const menu = document.querySelector('.menu-navegacion')

/*console.log(menu)
console.log(menunav)*/

/* AGREGAR QUE CUANDO TOQUE O SE DE CLIC A UN ICONO SE ABRA UN MENU*/

menunav.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

/* HACER QUE UN MENU LATERAL SE CIERRE Y SE ABRA */

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != menunav     ){

        menu.classList.toggle("spread")
        
    }
})