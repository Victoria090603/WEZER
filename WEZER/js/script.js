var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    // loop: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    speed: 700,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".swiper-reviews", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

$('.btn-mobile').click( function(){
    $('body').toggleClass('open-menu-mobile');
})

