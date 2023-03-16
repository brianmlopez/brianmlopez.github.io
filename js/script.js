jQuery(document).ready(function ($) {

    const navbar = document.querySelector('header');
    window.onscroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    };

    $('.customFadeIn').fadeIn(1000).removeClass('customFadeIn');
        

    $(window).scroll( function(){
        $('.fadeIn').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
        });
    });
        

    $(".header-menu-icon").click(function () {
        $(".header-menu-list").fadeIn();
        $(".header-menu-list").addClass("menu-active");

    });

    $(".menu-popup-close-btn").click(function () {
        $(".header-menu-list").fadeOut();
    });

    $(".header-menu-list a").click(function () {
        $(".header-menu-list").removeClass("menu-active");
    });

    $(".project-list-item").hover(function () {
        $(".project-list-item-content", this).toggleClass("project-content-hover");
        $(".project-list-item-overlay", this).toggleClass("project-list-item-overlay-hover");
    });
});