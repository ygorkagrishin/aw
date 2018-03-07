var slider = (function () {

// cache DOM
var carousel = $('#carousel'),
    row = carousel.find('.caro__row'),
    slide = carousel.find('.caro__slide'),
    prev = carousel.find('.caro__prev'),
    next = carousel.find('.caro__next');

// configuration
var animationSpeed = 500,
    pause = 1000;
    currentSlide = 0;
    slideAmount = slide.length,
    switchInterval;

row.find('.caro__slide:first-child').clone(true).appendTo(row);
    
next.on('click', nextSlide);

function nextSlide(){
    if ( slideAmount - 1 >= currentSlide ) {
        ++currentSlide;
        move();
    }
    else {
        setTimeout(nextSlide, animationSpeed);
        currentSlide = 0;
        def();
    }
};

prev.on('click', prevSlide);

function prevSlide(){
    if ( currentSlide !== 0 ) {
        --currentSlide;
        move();
    }
    else {
        setTimeout(prevSlide, animationSpeed);
        currentSlide = slideAmount;
        def();
    }
};

var x, y, newX, newY;

carousel.on('touchstart', function (e){
    var touch = e.changedTouches[0];

    x = touch.clientX;
    y = touch.clientY;
});

carousel.on('touchend', function (e){
    var touch = e.changedTouches[0];

    newX = touch.clientX;
    newY = touch.clientY;

    if ( Math.abs( x - newX ) >= Math.abs( y - newY ) ) 
        if ( x > newX )
            nextSlide();
        else if ( newX > x )
            prevSlide();
});

function move(){
    row.css({
        'transition': 'all 0.5s',
        'transform': 'translateX(-'+ currentSlide +'00%)'
    });
}

function def(){
    row.removeAttr('style');
    row.css( 'transform', 'translateX(-'+ currentSlide +'00%)')
}

})();