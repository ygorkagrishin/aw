var slide = (function () {

// cache DOM
var caro = $('#carousel'),
    row = caro.find('.caro__row'),
    slide = caro.find('.caro__slide'),
    prev = caro.find('.caro__prev'),
    next = caro.find('.caro__next'),
    len;

    // init clone fist slide
    slide.first().clone(true).appendTo(row);

    // After cloning an element, update value. 
    slide = caro.find('.caro__slide');
    len = slide.length - 1;

// Counters
var currentSlide = 0;
    counterSlide = len;

// configuration
var animationSpeed = 500,
    pause = 3000;

// Interval
var switchInterval = null,
    autoPlay = true;

next.on('click', function (){
    if ( autoPlay ) 
        clearInterval( switchInterval );
    
    nextSlide();
});

function nextSlide(){

    if ( counterSlide !== currentSlide ) {
        ++currentSlide;
        move();
    }
    else {
        setTimeout( nextSlide, 20 );
        currentSlide = 0;
        res();
    }
};

prev.on('click', function () {
    if ( autoPlay )
        clearInterval( switchInterval );

    prevSlide();
});

function prevSlide(e){

    if ( currentSlide !== 0  ) {
        --currentSlide;
        move();
    }
    else {
        setTimeout( prevSlide, 20 );
        currentSlide = counterSlide;
        res();
    }
};

var x, y, newX, newY;

caro.on('touchstart', function (e){
    var touch = e.changedTouches[0];

    x = touch.clientX;
    y = touch.clientY;
});

caro.on('touchend', function (e){

    if ( autoPlay ) 
        clearInterval( switchInterval );

    var touch = e.changedTouches[0];

    newX = touch.clientX;
    newY = touch.clientY;

    if ( Math.abs( x - newX ) >= Math.abs( y - newY ) ) 
        if ( x > newX )
            nextSlide();
        else if ( newX > x )
            prevSlide();
});

if ( autoPlay ) 
    switchInterval = setInterval( nextSlide, pause );

function move(){
    row.css({
        'transition': 'all '+ animationSpeed +'ms',
        'transform': 'translateX(-'+ currentSlide +'00%)'
    });
}

function res(){
    row.removeAttr('style');
    row.css({
        'transform': 'translateX(-'+ currentSlide +'00%)'
    });
}

})();