//Instance du swiper
swiper = new Swiper('.swiper', {
  
  //Navigation using Keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    //Pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//Fonction pour avoir l'index du projet
function getIndex(){
  let index = window.location.hash;
  index = index.substring(1);
  console.log(index);

  return parseInt(index);
}

swiper.slideTo(getIndex(), 0);

//Listener
swiper.on('slideChange', function () {
  window.location.hash = swiper.activeIndex;
});


