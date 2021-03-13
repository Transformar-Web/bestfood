// menu
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector(".nav__lista");
btnMenu.addEventListener("click",()=>{
  
    btnMenu.classList.toggle("is-active");
    menu.classList.toggle("nav__nuevo--active");

});
// .................................................



// filtrar
const navSelect = document.querySelector('.subSection2__select');
const navSelectItems = Array.from(document.querySelectorAll('.subSection2__selectItem'));
const contentItem = Array.from(document.querySelectorAll('.subSection2__contenidoItem'));

navSelect.addEventListener('click',(e)=>{
  
    let indice = navSelectItems.indexOf(e.target);
    navSelectItems.map(element => element.classList.remove('subSection2__selectItem--activeShow'));
    navSelectItems[indice].classList.add('subSection2__selectItem--activeShow');
    
    const atributo = navSelectItems[indice].getAttribute('data-atributo');
    
    for(i = 0; i < contentItem.length; i++){
      contentItem[i].style.display = 'none';

      if(contentItem[i].getAttribute('data-id') == atributo){
        contentItem[i].style.display = 'block';
      }

      if(atributo == 'todo'){
        contentItem[i].style.display = 'block';
      }
    }

});
//-----------------------------------------------------


// const closeShow = document.querySelector('.imgClose');
// const showBanner = document.querySelector('.showBanner');
// closeShow.addEventListener('click', function(){
//     showBanner.classList.remove('active--banner');
// });


// window.addEventListener('DOMContentLoaded', function(){
//     setTimeout(()=> {
//       showBanner.classList.add('active--banner');
//     },50000);

    // showBanner.onclick = function(){
    //   showBanner.classList.remove('active--banner');
    // }
// });


//sweetAlert form 

const formulario = document.querySelector('.subSection4__formulario');
formulario.addEventListener('submit', (e)=>{
  e.preventDefault();
    Swal.fire({
      title: 'Envío Completado!!',
      text: 'Se enviaron los datos correctamente',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: ' rgba(252, 207, 8, 0.993)',
    })   
   
    formulario.reset();
});








