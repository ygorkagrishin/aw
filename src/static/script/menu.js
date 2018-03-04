var menu = (function () {

var body = $('body'),
    open = body.find('.js-b-menu'),
    navigator = body.find('.js-nav'),
    link = navigator.find('li > a'),
    sect = body.find('.js-sect'),
    close = navigator.find('.js-nav__close-trigger');

open.click(openMenu);

function openMenu() {
    if ( !navigator.hasClass('active') ) 
        return navigator.addClass('active');
}

close.click(closeMenu);

function closeMenu() {
    if ( navigator.hasClass('active') ) 
        return navigator.removeClass('active');
}

link.click(moveSect);

function moveSect(e) {
    e.preventDefault();

    var attr = $(this).attr('data-sect'), offsetTop;

    sect.each(function (indx, elem) {
        var that = $(this);
        if ( that.attr('data-anchor') === attr ) 
            return offsetTop = that.offset().top;
    });
    
    closeMenu();

    $('html,body').animate({ scrollTop : offsetTop }, 700)
}

})();