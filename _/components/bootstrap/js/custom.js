$(function(){
    $('.adverts').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 900
    });

    $('.posters').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: false
    });

    $('#view2').on('click', function(event){
        event.preventDefault();
        $('.about-content .xerox-printer').fadeToggle();
    });

    $('#view3').on('click', function(event){
        event.preventDefault();
        $('.about-content .team-work').fadeToggle();
    });

    $('#view4').on('click', function(event){
        event.preventDefault();
        $('.about-content .experience').fadeToggle()
    });

});