

document.addEventListener( 'DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.glide');
  slides.forEach(carousels => {
    new Glide(carousels, {
          type: 'carousel',
          perView: 3,
          breakpoints: {
            800: {
              perView: 2
            },
            480: {
              perView: 1
            }
        }
    }).mount();
    });
});



