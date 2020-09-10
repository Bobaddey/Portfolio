$(document).ready(function(){
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once:true,
    });
});

// $('nav a[href*="#"]').on('click',function(){
//     $('html, body').animate(Keyframes{
//         scrollTop: $($(this).attr('href')).offset().top -100
//     }, options 2000);
// });
