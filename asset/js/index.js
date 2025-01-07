
$(document).ready(function() {
    $('.marquee p').marquee({
        duration: 15000,   // Time in ms for the scroll
        gap: 50,           // Space between loops
        delayBeforeStart: 0, // Delay before starting the animation
        direction: 'left', // Direction of scroll
        duplicated: true   // Duplicates the text for continuous scroll
    });
});


// Swiper Slider
const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    spaceBetween: 18,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   breakpoints : {
      0 : {
        slidesPerView : 1,

      },
      720 : {
        slidesPerView : 3,
      },
      1024 : {
        slidesPerView : 5,
      }
   }
});
// 


// <div class="cart-solidus shadow d-flex justify-content-center align-items-center col-6 col-md-4 col-lg-2 m-3 border">
//                   <img src="./asset/img/anhsp1.png" alt="" class="img-fluid ">
//                </div>
//                 <div class="cart-solidus shadow d-flex justify-content-center align-items-center col-6 col-md-4 col-lg-2 m-3 border">
//                     <img src="./asset/img/anhsp1.png" alt="" class="img-fluid ">
//                 </div>
//                 <div class="cart-solidus shadow d-flex justify-content-center align-items-center col-6 col-md-4 col-lg-2 m-3 border">
//                     <img src="./asset/img/anhsp1.png" alt="" class="img-fluid">
//                 </div>
//                 <div class="cart-solidus shadow d-flex justify-content-center align-items-center col-6 col-md-4 col-lg-2 m-3 border">
//                     <img src="./asset/img/anhsp1.png" alt="" class="img-fluid">
//                 </div>
//                 <div class="cart-solidus shadow d-flex justify-content-center align-items-center col-6 col-md-4 col-lg-2 m-3 border">
//                     <img src="./asset/img/anhsp1.png" alt="" class="img-fluid">
//                 </div>
//                 <div class="cart-solidus shadow d-flex justify-content-center align-items-center col-6 col-md-4 col-lg-2 m-3 border">
//                     <img src="./asset/img/anhsp1.png" alt="" class="img-fluid">
//                 </div>
//                 <div class="cart-solidus shadow d-flex justify-content-center align-items-center col-6 col-md-4 col-lg-2 m-3 border">
//                     <img src="./asset/img/anhsp1.png" alt="" class="img-fluid">
//                 </div>

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});
