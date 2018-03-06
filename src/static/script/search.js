var search = (function () {

var search = $('.header__search'),
    trigger = search.find('.js-search-trigger');

trigger.click(openSearch);

function openSearch() {
    if ( !search.hasClass('active') ) 
        return search.addClass('active'); 
    else 
        return search.removeClass('active');
}

})();