jQuery(document).ready(function ($) {

    $(".menu-icon").click(function () {
        $(".header-menu-list").addClass("menu-active");
    });

    $(".menu-popup-close-btn").click(function () {
        $(".header-menu-list").removeClass("menu-active");
    });

    $(".header-menu-list a").click(function () {
        $(".header-menu-list").removeClass("menu-active");
    });

    $(".project-list-item").hover(function () {
        $(".project-list-item-content", this).toggleClass("project-content-hover");
        $(".project-list-item-overlay", this).toggleClass("project-list-item-overlay-hover");
    });
});