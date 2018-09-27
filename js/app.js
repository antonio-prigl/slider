$(document).ready(function() {
    $(".slider__arrow--right").click(function() {
        $(".slider__row img:last").after($(".slider__row img:first"));
        $(".slider__row--alt img:last").after($(".slider__row--alt img:first")); 
    });

    $(".slider__arrow--left").click(function() {
        $(".slider__row img:first").before($(".slider__row img:last"));
        $(".slider__row--alt img:first").before($(".slider__row--alt img:last"));  
    });
});