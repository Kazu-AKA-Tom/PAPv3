$('.navTrigger').click(function () {

  $(this).toggleClass('active');

  console.log("Clicked menu");

  $("#mainListDiv").toggleClass("show_list");
  
  $("#mainListDiv").fadeIn();

});

const images = document.querySelectorAll('.img-gallery');
const images-light = document.querySelector('.add-image');
const container-light = document.querySelector('.image-light');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    
    })
})

container-light.addEventListener('click', (e) =>{
    if(e.target !== imagenesLight){
        container-light.classList.remove('show');
        image-light.classList.remove('showImage'); 
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.add('show');
    imagenesLight.classList.add('showImage');
}