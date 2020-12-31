$('.owl-werk').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 20,
    autoplayHoverPause: true,
    items: 3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 3
        },
    }
});