var search = (function () {

var search = $('.header__search'),
    trigger = search.find('.js-search-trig');

trigger.click(handler);

function handler() {
    !search.hasClass('active') ? search.addClass('active') : 
    search.removeClass('active');
}

})();