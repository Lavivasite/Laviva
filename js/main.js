const menuBtn = document.querySelector('.burger');
const menuMobile = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('nav__active');
});

new Swiper('.menu__box', {
  initialSlide:1,
  slidesPerView: 1.3,
  roundLengths: true,
  slidesPerGroup: 1,
  watchOverflow: true,
  centeredSlides: true,
  breakpoints: {
    
    460: {
      
      slidesPerView: 1.7,
      spaceBetween: 15,
      
    },

    820: {
      
      slidesPerView: 3,
      spaceBetween: 15,
      
    },
    

    
  }

});

new Swiper('.testimonial__box', {
  slidesPerView: 1.1,
  spaceBetween: 18,
  roundLengths: true,
  slidesPerGroup: 1,
  watchOverflow: true,
  pagination: {
    el: ".testimonial-pagination",
    clickable:true
  },
  breakpoints: {
    
    390: {
      
      slidesPerView: 1.2,
      
    },

    460: {
      
      slidesPerView: 1.45,
      spaceBetween: 0,
    },

    820: {
      
      slidesPerView: 2,
      spaceBetween: 0,
    },

    1220: {
      
      slidesPerView: 3,
      spaceBetween: 30,
    },
    
  }

});





new Swiper('.blog__slider', {
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
  simulateTouch: false,
  slidesPerView: 1.1,
  spaceBetween: 30,
  roundLengths: true,
  slidesPerGroup: 1,
  breakpoints: {

    390: {
      
      slidesPerView: 1.25,
      
      
    },
    
    460: {
      
      slidesPerView: 1.4,
      spaceBetween: 15,
      
    },

    650: {
      
      slidesPerView: 2,
      spaceBetween: 15,
      
    },

    1220: {
      
      slidesPerView: 3,
      spaceBetween: 15,
      
    },

    
    

    
  }
  
  
});













