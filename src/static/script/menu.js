var menu = (function () {

var body = $('body'),
    open = $('.js-b-menu'),
    menu = $('.js-nav'),
    link = menu.find('li > a'),
    sect = $('.js-sect'),
    close = menu.find('.js-nav-close-trig');

open.on('click', openMenu);

function openMenu() {
    scrollLock();

    if ( !menu.hasClass('active') ) 
        return menu.addClass('active');
}

close.on('click', closeMenu);

function closeMenu() {
    scrollLock();

    if ( menu.hasClass('active') ) 
        return menu.removeClass('active');
}

link.on('click', moveTo);

function moveTo(e) {
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

function scrollLock() {
    if (body.hasClass('nav-open')) {
        body.removeClass('nav-open');
        body.unbind('touchmove');
    }
    else {
        body.addClass('nav-open');
        body.on('touchmove', function (e) { e.preventDefault();}, false);
    }
}

})();