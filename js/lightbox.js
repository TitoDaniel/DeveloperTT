const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.image-light')
const menunav1 = document.querySelector('.menunav')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
         aparecerimagen(imagen.getAttribute('src'))
      })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menunav1.style.opacity = '1'
    }
})

const aparecerimagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menunav1.style.opacity = '0'

}